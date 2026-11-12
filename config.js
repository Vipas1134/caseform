// ตั้งค่าฟอร์มรายงานเคส — แก้ 2 บรรทัดนี้หลังสร้าง LIFF และ Deploy Apps Script (ดู README หัวข้อ "ฟอร์มรายงานเคส")
window.CASEFORM_CONFIG = {
  LIFF_ID: '2012576070-PcGvsPR0',   // LIFF ID เช่น 2001234567-AbCdEfGh  (LINE Developers > LINE Login channel > LIFF)
  API_URL: 'https://script.google.com/macros/s/AKfycbyRsIWENI5R1XNTsCNoMWZyHZ6fXb0R8nKe-jpeiLc6c1B9mxsZ91V6OBNS8TpQDtl-/exec',   // Web app URL ของ Apps Script ที่ลงท้าย /exec (ตัวเดียวกับ Webhook URL ของบอท)
  MOCK: false    // true = โหมดจำลอง ไม่เชื่อม LINE/ชีต (ไว้ลองหรือสอน ext)
};
