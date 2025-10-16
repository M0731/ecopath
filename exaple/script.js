function goToCityPage() {
  const cityPage = document.getElementById("citySelect").value;
  if (cityPage) {
    window.location.href = cityPage; // Go to that page
  }
}