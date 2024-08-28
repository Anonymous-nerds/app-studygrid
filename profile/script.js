document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('edit-btn');
    const saveButton = document.getElementById('save-btn');
    const profilePic = document.getElementById('profile-pic');
    const profilePicInput = document.getElementById('profile-pic-input');
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
  
    // Enable editing
    editButton.addEventListener('click', function () {
      inputs.forEach(input => input.disabled = false);
      editButton.style.display = 'none';
      saveButton.style.display = 'inline-block';
    });
  
    // Save changes
    saveButton.addEventListener('click', function () {
      inputs.forEach(input => input.disabled = true);
      editButton.style.display = 'inline-block';
      saveButton.style.display = 'none';
    });
  
    // Change profile picture
    profilePic.addEventListener('click', function () {
      profilePicInput.click();
    });
  
    profilePicInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  });