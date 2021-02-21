function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {

        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });

    }

    function showTabsContent(i = 0) {

        tabsContent[i].classList.remove("hide");
        tabsContent[i].classList.add("show", "fade");

        tabs[i].classList.add(activeClass);

    }

    hideTabsContent();
    showTabsContent();


    tabsParent.addEventListener("click", (evt) => {
        const target = evt.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {

            tabs.forEach((item, i) => {

                if (item == target) {
                    hideTabsContent();
                    showTabsContent(i);
                }

            });

        }


    });
}

export default tabs;