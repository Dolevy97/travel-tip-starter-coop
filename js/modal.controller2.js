
let locIdToDelete;

export function onRemoveLoc(locId) {
    locIdToDelete = locId;
    showDeleteModal();
}

// Function to show the delete confirmation modal
function showDeleteModal() {
    document.querySelector('.delete-modal').style.display = 'block';
}

// Function to hide the delete confirmation modal
function hideDeleteModal() {
    document.querySelector('.delete-modal').style.display = 'none';
}

// Event listeners for the modal buttons
document.querySelector('.xbtn').addEventListener('click', hideDeleteModal);
document.querySelector('.deletebtn').addEventListener('click', () => {
    onRemoveLocConfirmed(locIdToDelete);
    hideDeleteModal();
});

function flashMsg2(msg) {
    const el = document.querySelector('.user-msg');
    el.innerText = msg;
    el.classList.add('open');
    setTimeout(() => {
        el.classList.remove('open');
    }, 3000);
}




function onRemoveLocConfirmed(locId) {
    locService.remove(locId)
        .then(() => {
            flashMsg2('Location removed');
            unDisplayLoc();
            loadAndRenderLocs();
        })
        .catch(err => {
            console.error('OOPs:', err);
            flashMsg2('Cannot remove location');
        });
}
