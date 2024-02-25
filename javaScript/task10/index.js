  const tabData = [
    { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
    { id: 3, title: 'Tab 3', content: 'Content for Tab 3' },
  ];
  
  function createTabs() {
    const tabsContainer = document.getElementById('tabs-container');

    tabData.forEach(tab => {
      const tabElement = document.createElement('div');
      tabElement.classList.add('tab');
      tabElement.innerHTML = tab.title;
      tabElement.addEventListener('click', () => displayContent(tab));
      tabsContainer.appendChild(tabElement);
    });
  }
  function displayContent(tab) {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    const contentElement = document.createElement('div');
    contentElement.classList.add('tab-content');
    contentElement.textContent = tab.content;
    contentContainer.appendChild(contentElement);
  }

  createTabs();
  displayContent(tabData[0]); 