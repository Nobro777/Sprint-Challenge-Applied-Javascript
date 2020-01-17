// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTab(data) {
    const topicDiv = document.createElement('div');
    topicDiv.classList.add('tab');
    topicDiv.textContent = data;
    return topicDiv;
}

axios.get(' https://lambda-times-backend.herokuapp.com/topics')
.then((resp) => {    

    resp.data.topics.forEach (elem =>{
    let tab = newTab(elem);
    topicTab.appendChild(tab)
    }) 
});

const topicTab = document.querySelector('.topics') 

