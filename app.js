function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;

    if (weight === "" || height === "" || age === "" || weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('error-message').style.display = 'block';
        return;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    var status = '';

    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    document.querySelector('.bmi-status').innerText = status;
    document.querySelector('.bmi-value').innerText = bmi;
    document.getElementById('result').style.display = 'block';

    if (bmi >= 25 && bmi <= 29.9) {
        showConsultation();
    } else {
        hideConsultation();
    }

    if (bmi < 18.5) {
        showUnderweightInfo();
        hideObesityInfo();
    } else {
        hideUnderweightInfo();
    }

    if (bmi > 30) {
        showObesityInfo();
    } else {
        hideObesityInfo();
    }
}

function showConsultation() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('disease-info').style.display = 'block';
}

function hideConsultation() {
    document.getElementById('consultation').style.display = 'none';
    document.getElementById('disease-info').style.display = 'none';
}

function showUnderweightInfo() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('underweight-info').style.display = 'block';
}

function hideUnderweightInfo() {
    document.getElementById('underweight-info').style.display = 'none';
}

function showObesityInfo() {
    document.getElementById('consultation').style.display = 'flex';
    document.getElementById('obesity-info').style.display = 'block';
}

function hideObesityInfo() {
    document.getElementById('obesity-info').style.display = 'none';
}