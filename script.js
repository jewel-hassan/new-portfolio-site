$(document).ready(function () {
    $('.progress-circle').easyPieChart({
        barColor: ' rgb(248, 123, 5)',   // ✅ প্রোগ্রেস বারের রঙ (সবুজ)
        trackColor: '#ddd',    // ✅ ব্যাকগ্রাউন্ড কালার (গ্রে)
        scaleColor: false,     // ✅ স্কেল লাইন (টিক মার্ক) লুকানো
        lineWidth: 10,         // ✅ প্রোগ্রেস বারের পুরুত্ব (10px)
        size: 160,             // ✅ প্রোগ্রেস বারের আকার (160px)
        animate: 2000          // ✅ এনিমেশন সময়কাল (2 সেকেন্ড)
    });
});