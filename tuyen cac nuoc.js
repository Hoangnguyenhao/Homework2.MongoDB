use worldcup2026

db.createCollection("quocgia")
db.createCollection("doibong")
db.createCollection("trandau")
db.createCollection("duDoan")
db.createCollection("user")

db.quocgia.insertMany([
  { maQG: "QG01", tenQG: "Argentina" },
  { maQG: "QG02", tenQG: "Pháp" },
  { maQG: "QG03", tenQG: "Brazil" }
])

db.doibong.insertMany([
  { maDB: "DB01", tenDB: "Argentina", maQG: "QG01" },
  { maDB: "DB02", tenDB: "Pháp", maQG: "QG02" },
  { maDB: "DB03", tenDB: "Brazil", maQG: "QG03" }
])

db.user.insertMany([
  { maUser: "U01", tenUser: "Nguyen Van A" },
  { maUser: "U02", tenUser: "Le Thi B" }
])

db.trandau.insertMany([
  { maTD: "TD01", doi1: "Argentina", doi2: "Pháp", tiSo: "2-1" },
  { maTD: "TD02", doi1: "Brazil", doi2: "Pháp", tiSo: "1-3" }
])

db.duDoan.insertMany([
  { maDD: "DD01", maUser: "U01", tranDau: "TD01", duDoanTiSo: "2-1" },
  { maDD: "DD02", maUser: "U02", tranDau: "TD02", duDoanTiSo: "1-2" }
])

db.doibong.updateMany(
  {},
  [
    { $set: { tenDB: { $concat: [ "Tuyển ", "$tenDB" ] } } }
  ]
)

db.doibong.find()
