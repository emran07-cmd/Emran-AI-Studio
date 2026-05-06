function showTab(tabName) {
    // Sab sections ko hide karo
    document.getElementById('chat-section').style.display = 'none';
    document.getElementById('voice-section').style.display = 'none';
    
    // Active button color badlo
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));

    // Jo chahiye use dikhao
    if(tabName === 'chat') {
        document.getElementById('chat-section').style.display = 'block';
    } else if(tabName === 'voice') {
        document.getElementById('voice-section').style.display = 'block';
    } else if(tabName === 'settings') {
        alert("Settings jald hi aayenge!");
    }
}

