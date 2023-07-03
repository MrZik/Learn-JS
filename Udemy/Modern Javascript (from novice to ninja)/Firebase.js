const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe,id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn-danger btn-sm my-2">delete</button>
        </li>
    `;

    list.innerHTML += html;
};

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
};

// get document realtime
// whenever the db takes a snapshot, it will fire the callback
const unsub = db.collection('recipes').onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    const doc = change.doc;
                    if(change.type === 'added'){
                        addRecipe(doc.data(),doc.id);
                 } else if(change.type === 'removed'){
                        deleteRecipe(doc.id);
                }
                });
             });


// getdocument
// db.collection('recipes').get().then(snapshot => {
//     // Get data from a single data
//     // console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach((doc) => {
//         addRecipe(doc.data(), doc.id);
//     });
// }).catch(err => {
//     console.log(err);
// });

// add documents
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();

    const recipe = {
        title:form.recipe.value,
        // this is not working
        //created_at: firebase.firestore.TImestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe)
       .then(() => console.log('recipe added'))
       .catch(err => console.log(err));
});

// delete data
list.addEventListener('click',e => {
    if(e.target.targetName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id)
            .delete()
            .then(() =>console.log('recipe deleted.'))
            .catch(err => console.log(err));
    }
});

// unsub from db changes
button.addEventListener('click', () => {
    unsub();
});