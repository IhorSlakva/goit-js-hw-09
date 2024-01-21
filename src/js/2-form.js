const formElem = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

formElem.addEventListener('input', e => {
    const userEmail = formElem.elements.email.value.trim();
    const userMessage = formElem.elements.message.value.trim();
    
    const data = {
        email: userEmail, 
        message: userMessage,  
    }
    saveToLs(storageKey,data);
});

formElem.addEventListener('submit', e => {
    e.preventDefault();
    const { email, message } = loadFromLs(storageKey) || {};
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    formElem.reset();
})

function saveToLs(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function loadFromLs(key = 'empty') {
    const data = localStorage.getItem(key);

    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}

function restoreData() {
    const { email, message } = loadFromLs(storageKey) || {};
    
    formElem.elements.email.value = email || '';
    formElem.elements.message.value = message || '';
}

restoreData();