function filterList() {
    var levelSelection = document.getElementsByName("lvl")[0].value;
    var classSelection = document.getElementsByName("classes")[0].value;

    var arrLinksToDisable = [];
    var arrLinksToEnable = [];

    if(levelSelection != "-" && classSelection != "-")
    {
        var allLinksToDisable = document.evaluate("/html/body/ul//data[not(contains(@value,'" + classSelection + "')) or not(contains(@value,'" + levelSelection + "'))]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToDisable = allLinksToDisable.iterateNext();
        while(currentLinkToDisable)
        {
            arrLinksToDisable.push(currentLinkToDisable)
            currentLinkToDisable = allLinksToDisable.iterateNext();
        }
        var allLinksToEnable = document.evaluate("/html/body/ul//data[contains(@value,'" + classSelection + "') and contains(@value,'" + levelSelection + "')]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToEnable = allLinksToEnable.iterateNext();
        while(currentLinkToEnable)
        {
            arrLinksToEnable.push(currentLinkToEnable)
            currentLinkToEnable = allLinksToEnable.iterateNext();
        }
        arrLinksToEnable.forEach(function(link) {
            link.removeAttribute('style');
        });
        arrLinksToDisable.forEach(function(link) {
            link.setAttribute('style','display: none;');
        });
        console.log(arrLinksToEnable);
        console.log(arrLinksToDisable);
    }
    else if(levelSelection != "-" && classSelection == "-")
    {
        var allLinksToDisable = document.evaluate("/html/body/ul//data[not(contains(@value,'" + levelSelection + "'))]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToDisable = allLinksToDisable.iterateNext();
        while(currentLinkToDisable)
        {
            arrLinksToDisable.push(currentLinkToDisable)
            currentLinkToDisable = allLinksToDisable.iterateNext();
        }
        var allLinksToEnable = document.evaluate("/html/body/ul//data[contains(@value,'" + levelSelection + "')]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToEnable = allLinksToEnable.iterateNext();
        while(currentLinkToEnable)
        {
            arrLinksToEnable.push(currentLinkToEnable)
            currentLinkToEnable = allLinksToEnable.iterateNext();
        }
        arrLinksToEnable.forEach(function(link) {
            link.removeAttribute('style');
        });
        arrLinksToDisable.forEach(function(link) {
            link.setAttribute('style','display: none;');
        });
    }
    else
    {
        var allLinksToDisable = document.evaluate("/html/body/ul//data[not(contains(@value,'" + classSelection + "'))]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToDisable = allLinksToDisable.iterateNext();
        while(currentLinkToDisable)
        {
            arrLinksToDisable.push(currentLinkToDisable)
            currentLinkToDisable = allLinksToDisable.iterateNext();
        }
        var allLinksToEnable = document.evaluate("/html/body/ul//data[contains(@value,'" + classSelection + "')]/..", document, null, XPathResult.ANY_TYPE, null,);
        var currentLinkToEnable = allLinksToEnable.iterateNext();
        while(currentLinkToEnable)
        {
            arrLinksToEnable.push(currentLinkToEnable)
            currentLinkToEnable = allLinksToEnable.iterateNext();
        }
        arrLinksToEnable.forEach(function(link) {
            link.removeAttribute('style');
        });
        arrLinksToDisable.forEach(function(link) {
            link.setAttribute('style','display: none;');
        });
    };
};