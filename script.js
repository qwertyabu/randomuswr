async function changeUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    document.getElementById('userImage').src = user.picture.large;
    document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('userPhone').textContent = `Phone: ${user.phone}`;
    document.getElementById('userLocation').textContent = `Location: ${user.location.city}, ${user.location.country}`;
    document.getElementById('userEmail').textContent = `Email: ${user.email}`;
}

changeUser();
