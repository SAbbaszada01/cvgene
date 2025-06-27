function generateCV() {
    // Məlumatları götür
    const fullName = document.getElementById('fullName').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // CV-yə doldur
    document.getElementById('cvName').textContent = fullName;
    document.getElementById('cvProfession').textContent = profession;
    document.getElementById('cvContact').textContent = `${email} | ${phone}`;
    document.getElementById('cvExperience').textContent = experience;
    document.getElementById('cvSkills').textContent = skills;

    // CV görün et
    document.getElementById('cvPreview').style.display = 'block';
    document.getElementById('actions').style.display = 'flex';
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById('cvPreview');
    
    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
    });
}

function downloadImage() {
    const element = document.getElementById('cvPreview');
    
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'cv.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}