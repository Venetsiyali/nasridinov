// Barcha ma'lumotlar shu yerda. [...] belgili joylarni haqiqiy ma'lumot bilan almashtiring.
const PERSON = {
  name: "Nasridinov Rustamjon",
  photo: "", // masalan: "rasm.jpg" (fayl repoga qo'shiladi)
  photoCaption: "Nasridinov Rustamjon",
  summary: "<b>Nasridinov Rustamjon</b> [otasining ismi] ([tug'ilgan sana], [tug'ilgan joy]) — o'zbekistonlik [kasbi / faoliyat sohasi]. [Asosiy yutuqlari haqida 1–2 gap].",
  infobox: [
    ["To'liq ismi", "Nasridinov Rustamjon [otasining ismi]"],
    ["Tug'ilgan sanasi", "[kun.oy.yil]"],
    ["Tug'ilgan joyi", "[shahar, viloyat], O'zbekiston"],
    ["Fuqaroligi", "O'zbekiston"],
    ["Ma'lumoti", "[o'quv yurti]"],
    ["Kasbi", "[kasbi]"],
    ["Faoliyat yillari", "[yil] – hozirgacha"],
    ["Mukofotlari", "[mukofotlar]"],
  ],
  sections: [
    { title: "Hayoti va ta'limi", paras: [
      "[Bolaligi, oilasi, maktab yillari haqida.]",
      "[Oliy ta'lim: qayerda, qachon, qaysi yo'nalishda o'qigan.]" ] },
    { title: "Faoliyati", paras: [
      "[Mehnat faoliyati boshlanishi.]",
      "[Muhim lavozimlar va loyihalar.]" ] },
    { title: "Yutuqlari va mukofotlari", list: [
      "[yil] — [mukofot nomi]",
      "[yil] — [yutuq]" ] },
    { title: "Shaxsiy hayoti", paras: ["[Oilasi, qiziqishlari.]"] },
  ],
  references: [
    "[Manba nomi, havola]",
  ],
  links: [
    ["GitHub", "https://github.com/venetsiyali"],
  ],
};
