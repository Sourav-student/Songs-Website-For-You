const songs = [
  [
    {
      song: './songs/cs/Kesariya.mp3',
      title: 'Kesariya',
      image: './image/kesariya.png',
      Singer: ' Arijit Singh'
    },
    {
      song: './songs/cs/Ajab_Si.mp3',
      title: 'Aankhon Mein Teri Ajab Si',
      image: './image/Akhho_me.png',
      Singer: 'KK'
    },
    {
      song: './songs/cs/Jag_Soona_Soona_Lage.mp3',
      title: 'Jag Soona Soona Lage',
      image: './image/Akhho_me.png',
      Singer: 'Rahat Fateh Ali Khan, Richa Sharma'
    },
    {
      song: './songs/cs/Jai_Jai_Shivshankar.mp3',
      title: 'Jai Jai Shivshankar',
      image: './image/War.png',
      Singer: 'Vishal Dadlani & Benny Dayal'
    },
    {
      song: './songs/cs/Chand_Sifarish.mp3',
      title: 'Chand Sifarish',
      image: './image/Chand.png',
      Singer: 'Shaan, Kailash Kher, Jatin-Lalit, Prasoon Joshi'
    },
    {
      song: ' ./songs/cs/Oh_Maahi.mp3',
      title: 'Oh Maahi',
      image: './image/maahi.png',
      Singer: ' Arijit Singh'
    },
    {
      song: ' ./songs/cs/Sajni_re.mp3',
      title: 'Sajni Re',
      image: './image/sajni.png',
      Singer: 'Arijit Singh'
    },
    {
      song: ' ./songs/cs/SATRANGA.mp3',
      title: 'Satranga',
      image: './image/satranga.png',
      Singer: 'Arijit Singh'
    },
    {
      song: ' ./songs/cs/Tujh_Mein_Rab_Dikhta_Hai.mp3',
      title: 'Tujh Mein Rab Dikhta Hai',
      image: './image/rab.png',
      Singer: ' Roopkumar Rathod'
    },
    {
      song: ' ./songs/cs/Tum_Kya_Mile.mp3',
      title: 'Tum Kya Mile',
      image: './image/tum_kya_mile.png',
      Singer: 'Arijit Singh'
    },
    {
      song: ' ./songs/cs/Tum_Se.mp3',
      title: 'Tum Se',
      image: './image/tum_se.png',
      Singer: ' Raghav Chaitanya, Sachin–Jigar, and Varun Jain'
    },
    {
      song: './songs/cs/Humko_Tumse_Pyaar_Hai.mp3',
      title: 'Humko Tumse Pyaar Hai',
      image: './image/humko.png',
      Singer: ' Anand Raj Anand'
    },
  ],

  [
    {
      song: './songs/ncs/Ae_Dil_Hai_Mushkil.mp3',
      title: 'Ae Dil Hai Mushkil',
      image: './image/muskil.png',
      Singer: 'Arijit Singh and Pritam Chakraborty'
    },
    {
      song: './songs/ncs/Main_Agar_Kahoon.mp3',
      title: ' Main Agar Kahoon',
      image: './image/om_santi.png',
      Singer: 'Vishal-Shekhar'
    },
    {
      song: './songs/ncs/Dastaan.mp3',
      title: 'Dastaan-E-Om Shanti Om',
      image: './image/om_santi.png',
      Singer: 'Vishal-Shekhar'
    },
    {
      song: ' ./songs/ncs/Gerua_Dilwale.mp3',
      title: 'Gerua-Dilwale',
      image: './image/gerua.png',
      Singer: 'Antara Mitra, Arijit Singh, and Pritam Chakraborty'
    },
    {
      song: ' ./songs/ncs/Hum_Juda_Ho_Gaye.mp3',
      title: 'Hum Juda Ho Gaye',
      image: './image/Hum.png',
      Singer: 'Preethi Uttamsingh and Udit Narayan'
    },
    {
      song: ' ./songs/ncs/Janam_Janam.mp3',
      title: 'Janam Janam',
      image: './image/janam.png',
      Singer: 'Antara Mitra and Arijit Singh'
    },
    {
      song: ' ./songs/ncs/Shayad_(Reprise).mp3',
      title: 'Shayad (Reprise)',
      image: './image/shayad.png',
      Singer: 'Arijit Singh, Madhubanti Bagchi, and Pritam Chakraborty'
    },
    {
      song: ' ./songs/ncs/Bole_Chudiyan.mp3',
      title: 'Bole Chudiyan',
      image: './image/Chudiya.png',
      Singer: 'Amit Kumar'
    },
    {
      song: ' ./songs/bncs/AayiNai-stree.mp3',
      title: 'Aayi Nai',
      image: './image/aayi.png',
      Singer: 'Pawan Singh'
    },
    {
      song: ' ./songs/bncs/AmiJeTomar.0-BhoolBhulaiyaa.mp3',
      title: 'Ami Je Tomar',
      image: './image/ami_je.png',
      Singer: 'Arijit Singh and Shreya Ghoshal'
    },
    {
      song: ' ./songs/bncs/BhoolBhulaiyaa.mp3',
      title: 'Bhool Bhulaiyaa',
      image: './image/bhool.png',
      Singer: 'Neeraj Shridhar and Tulsi Kumar'
    },
    {
      song: ' ./songs/bncs/Mere_Mehboob.mp3',
      title: 'Mere Mehboob',
      image: './image/mehboob.png',
      Singer: 'Sachet Tandon and Shilpa Rao'
    },
    {
      song: ' ./songs/bncs/Mere_Dholna.mp3',
      title: 'Mere Dholna',
      image: './image/dholna.png',
      Singer: 'Sonu Nigam and Shreya Ghoshal'
    },
    {
      song: ' ./songs/bncs/Tu_Jo_Mila.mp3',
      title: 'Tu Jo Mila',
      image: './image/mila.png',
      Singer: 'KK'
    },
    {
      song: ' ./songs/bncs/Aankhein_Khuli_From_Mohabbatein.mp3',
      title: 'Tu Jo Mila',
      image: './image/Akha_kuli.png',
      Singer: 'jatin-Lalit'
    },
    {
      song: ' ./songs/bncs/Ishq_Mein.mp3',
      title: 'Ishq Mein',
      image: './image/ishq.png',
      Singer: '	Sachin-Jigar, Sachet Tandon, Asees Kaur, Amitabh Bhattacharya'
    },
  ],

  [
    {
      song: ' ./songs/ancs/Ik_Vaari_Aa.mp3',
      title: 'Ik Vaari Aa',
      image: './image/ek_bari.png',
      Singer: 'Jubin Nautiyal'
    },
    {
      song: ' ./songs/ancs/Raataan_Lambiya.mp3',
      title: 'Raataan Lambiyan',
      image: './image/shersaah.png',
      Singer: 'Jubin Nautiyal'
    },
    {
      song: ' ./songs/ancs/Khairiyat.mp3',
      title: 'Khairiyat',
      image: './image/many_moods.png',
      Singer: 'Arijit Singh'
    },
    {
      song: ' ./songs/ancs/Galti_Se_Mistake.mp3',
      title: 'Galti Se Mistake',
      image: './image/image.png',
      Singer: '	Pritam, Arijit Singh, Amit Mishra'
    },
    {
      song: ' ./songs/ancs/Jhoome_Jo_Pathaan.mp3',
      title: 'Jhoome Jo Pathaan',
      image: './image/image2.png',
      Singer: '	Pritam, Arijit Singh, Amit Mishra'
    },
    {

      song: './songs/ancs/Arsaa.mp3',
      title: 'ARSAA',
      image: './image/Arsaa.png',
      Singer: 'Amit Mishra and Abhishek Malhan'
    },
    {
      song: ' ./songs/ancs/Lut_Gaye.mp3',
      title: 'Lut Gaye',
      image: './image/Lut_Gaye.png',
      Singer: 'Jubin Nautiyal'
    },
    {
      song: ' ./songs/ancs/Phir_Kabhi.mp3',
      title: 'Phir Kabhi',
      image: './image/Phir_Kabhi.png',
      Singer: 'Amaal Mallik and Arijit Singh'
    },
    {
      song: ' ./songs/ancs/Tum_Mere.mp3',
      title: 'Tum Mere',
      image: './image/Tum_Mere.png',
      Singer: 'Abhishek Malhan'
    },
    {
      song: ' ./songs/ancs/Tum_Mere_2.mp3',
      title: 'Tum Mere 2',
      image: './image/Tum_Mere_2.png',
      Singer: 'Abhishek Malhan and Crazy Deep'
    },
    {
      song: ' ./songs/ancs/Zor_Ki_Barsaat_Hui.mp3',
      title: 'Zor Ki Barsaat Hui',
      image: './image/Zor_Barsaat.png',
      Singer: 'Jubin Nautiyal and Rochak Kohli'
    },
  ],
]

export default songs;