const tabs = document.querySelector('.tabs');
//accessing tabs in class tabs good becasue you can access multiple tabs
const tabbutton = tabs.querySelectorAll('[role="tab"]');
const tabpanel = tabs.querySelectorAll('[role="tabpanel"]');

//console.log(tabpanel);

function handleclick(event)
{

    //hide all tab panels
    tabpanel.forEach(panel =>
    {
        //console.log(panel);
        panel.hidden = true;
    });
    //mark all unselected
    tabbutton.forEach(tab =>
    {
        //console.log(tab);
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    //find the correct tab info and show it
    const info = event.currentTarget.id;
    //console.log(tabPanel);
    const tabPanel = tabs.querySelector(`[aria-labelledby="${info}"]`);
    tabPanel.hidden = false;


}

tabbutton.forEach(function (button) { button.addEventListener('click', handleclick) });