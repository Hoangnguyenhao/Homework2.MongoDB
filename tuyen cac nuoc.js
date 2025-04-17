etCollection("TuyenCacNuoc").drop();

db.TuyenCacNuoc.insertMany([
  { "ten": "Việt Nam", "khuvuc": "Đông Nam Á", "chauluc": "Châu Á" },
  { "ten": "Thái Lan", "khuvuc": "Đông Nam Á", "chauluc": "Châu Á" },
  { "ten": "Indonesia", "khuvuc": "Đông Nam Á", "chauluc": "Châu Á" },
  { "ten": "Pháp", "khuvuc": "Tây Âu", "chauluc": "Châu Âu" },
  { "ten": "Đức", "khuvuc": "Tây Âu", "chauluc": "Châu Âu" },
  { "ten": "Nigeria", "khuvuc": "Tây Phi", "chauluc": "Châu Phi" },
  { "ten": "Brazil", "khuvuc": "Nam Mỹ", "chauluc": "Châu Mỹ" },
  { "ten": "Argentina", "khuvuc": "Nam Mỹ", "chauluc": "Châu Mỹ" },
  { "ten": "Úc", "khuvuc": "Châu Đại Dương", "chauluc": "Châu Úc" },
  { "ten": "New Zealand", "khuvuc": "Châu Đại Dương", "chauluc": "Châu Úc" }
]);

db.TuyenCacNuoc.updateMany(
  {},
  [{ $set: { ten: { $concat: ["Tuyển ", "$ten"] } } }]
);

print("=== Các tuyển quốc gia ở Đông Nam Á ===");
db.TuyenCacNuoc.find({ khuvuc: "Đông Nam Á" }).forEach(doc => printjson(doc));

print("\n=== Các tuyển quốc gia ở Châu Âu ===");
db.TuyenCacNuoc.find({ chauluc: "Châu Âu" }).forEach(doc => printjson(doc));
