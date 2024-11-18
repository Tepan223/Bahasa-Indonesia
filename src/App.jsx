import { useState } from 'react';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const storyArr = [
    { judul: 'Celana Sobek Saat Basket', story: 'Guna sangat bersemangat saat bermain basket bersama. Saking semangatnya, tanpa sadar saat Guna sedang loncat dan ingin menahan tembakan Wilbert tiba tiba ada suara celananya robek. Pada saat itu dilapangan sangat banyak orang yang sedang bermain basket dan ada yang menghampiri Guna yaitu Bevinson. Bevinson bertanya "Guna tadi suara apa Guna?" lalu Guna menjawab "Celana gua robek". Kemudian Bevinson berteriak "Woi!!! c  elana Guna robek" pada saat itu yang ada dilapangan tertawa bersama sama karena melihat celana Guna yang robek.' },
    { judul: 'Laptop Terbawa Oleh Lionel', story: 'Pada saat ingin pulang sekolah saya iseng terhadap temen saya dengan cara menyembunyikan laptop Cherryl. Pada saat pulang kerumah masing-masing, tiba tiba Lionel chat digrup "Weh, laptopnya Cherryl digua". Kebetulan pada saat itu mau badminton, Lionel membawakan laptop Cherryl dan mengembalukan laptopnya pada saat dilapangan. Kemudia Lionel menjelaskan kronologi mengapa laptopnya Cherryl berada ditas Lionel. Cherryl pun tertawa karena melihat kelakuan Lionel dan pada saat itu yang ada dilapangan tertawa.' },
    { judul: 'Kentut Pada Saat LDKS', story: 'Pada saat LDKS saya sedang mendengarkan Pak Hendrick yang sendang certia. Tiba tiba diseblah saya ada yang kentut dimana itu membuat saya tertawa, kemudia saya diplototin oleh Pak Hendrick. Pada saat dilihatin Pak Hendrick saya langsung buang muka kebawah, karena takut diomelin dengan posisi saya dipaling belakang dan sangat banyak orang yang dapat membuat saya malu. Tetapi saya dan orang sekitar yang mendengar suara kentut tersebut tertawa karena tempat yang sunyi tersebut tiba-tiba ada yang kentut.' },
    { judul: 'Terpeleset Saat Hujan', story: 'Saat hujan saya dan teman saya bermain diluar dengan berkendara motor. Pada saat bermain kita berteduh sementara dipinggir rumah yang lantainya licin. Tiba-tiba teman saya terpeleset saat ingin pindah tempat, karena terpeleset kapala teman saya terbentu dilantai. Saya dan temen saya tertawa karena dia jatoh yang tidak wajar, setelah tertawa saya membantu teman saya yang jatoh tersebut. Temen saya yang jatoh bilang ke saya "Tep tolong anterin gua balik, lo bawa motor gua". Pada saat perjalanan saya tertawa karena dia jatoh, kemudian saya bertanya kepadanya "Felix, kok lo bisa jatoh sih tadi?", Felix menjawab "iya lantainya licin banget, baru gerak dikit langsung jatoh". Susahnya dirumah saya membantu dia membawakan handuk dan pakaian ganti. Sesudah teman saya berganti pakaian, saya masih ketawa karena kelakuan teman saya.' },
    { judul: 'Bola DiSita', story: 'Sebelum bola disita temen saya bermain dikelas dan sudah diperingatkan oleh guru. Pada saat itu saya sedang istirahat, setelah istirahat saya bermain bola basket dikelas. Pada saat bermain bola basket dikelas dengan memantulkan bola ke lantai yang mengakibatkan suara keras yang menggangu guru yang sedang mengajar. Tiba tiba dateng seorang guru lalu langsung mengambil bola. Tiba-tiba temen saya tertawa dan bilang "Lo ngapain main bola dikelas?, padahal sudah dikasih tau" saya menjawab "Lah gua gak tau, tadi kan gua istirahat". Saya pun tertawa karena bolanya disita dan temen saya tidak memberitahu saya tentang yang sudah diperingatin oleh guru tersebut.' },
    { judul: 'Bangku Industri Patah', story: 'Kejadian ini terjadi di Industri tepatnya di Greenlake, Pada saat itu saya sedang duduk santai bersama Pak Ivan. Kemudian Kursi itu patah secara tiba - tiba dan membuat 1 RPL ketawa akibat saya jatuh karena tidak melihat bahwa kursinya tidak kuat menampung saya.' },
    { judul: 'Meja Rusak Karena Panco', story: 'Kejadian ini terjadi pada saat kami jam kososng Xues, Lionel, Felix, Saya dan beberapa teman saya panco di meja, kemudian meja tersebut menjadi patah akibat terlalu ditekan hingga kami panik dan di sertai ketawa.' },
    { judul: 'Bolos Paskibra', story: 'Hari senin dimana hari ekstrakurikuler paskriba. Pada saat paskibra saya tidak hadir karena ingin bolos, karena saya bosen saya dateng ke lapangan untuk melihat-lihat. Tiba-tiba saya di panggil oleh Kakak Pembina dan ditanya "abis dari mana kamu?", saya menjawab "abis makan kakak". Lalu saya disuruh push up 50 kali oleh kakak pembinannya dan saya ditertawai oleh Felix dan Hernando.' },
    { judul: 'Felix Dan Christivin Ciuman', story: 'Pada saat jam olah raga selesai, saya dan teman-teman saya kembali ke kelas untung mendinginkan badan agar tidak panas. Saya dan temen saya bermain dikelas seperti kejar kejaran dan menyembunyikan barang teman. Saat sudah selesai bermain kita ingin ganti baju seragam sekolah bersama sama, dimana Felix menghadap papan tulis dan Christivin menghadap pintu. Tiba-tiba Christivin dan Felix dipanggil secara bersamaan yang mengakibatkan Felix dan Christivin ciuman di pipi yang membuat satu kelas tertawa terbahak-bahak dengan kelakuan mereka berdua.' },
    { judul: 'Hukum Menghormat Bendera', story: 'Sebelum dihukum hormat bendera dilapangan oleh guru, saya dan teman saya membuat masalah dikelas dengan bermain bola hingga mengenai kepala teman saya berkali-kali yang membuat teman saya melapor kepada guru untuk menghukum saya dan teman-teman saya. Saya dan teman-teman saya dihuku berdiri menghormat bendera sampai pulang, saat dihukum saya dan teman-teman saya bercanda dan bercerita untuk menghibur dan tertawa karena kita dihukum bersama dengan masalah yang sama. Saya dan teman-teman saya merasa senang karena bisa dihukum bersama.' }
  ];

  function openStory(index) {
    setCurrentIndex(index);
  }

  return (
    <>
      <div className='head'>
        <p className='text-head'>
          Kumpulan 10 Cerita Teks Anekdot Create By Stevanus Gabriel
        </p>
      </div>
      <div className='main-content'>
        <div className='side-bar'>
          <div className='head-side-bar'>
            <p className='text-head-side-bar'>10 Cerita Anekdot</p>
            <div className='list-text'>
              <button className='button-text' onClick={() => openStory(0)}>
                Certia 1
              </button>
              <button className='button-text' onClick={() => openStory(1)}>
                Cerita 2
              </button>
              <button className='button-text' onClick={() => openStory(2)}>
                Cerita 3
              </button>
              <button className='button-text' onClick={() => openStory(3)}>
                Cerita 4
              </button>
              <button className='button-text' onClick={() => openStory(4)}>
                Cerita 5
              </button>
              <button className='button-text' onClick={() => openStory(5)}>
                Cerita 6
              </button>
              <button className='button-text' onClick={() => openStory(6)}>
                Cerita 7
              </button>
              <button className='button-text' onClick={() => openStory(7)}>
                Cerita 8
              </button>
              <button className='button-text' onClick={() => openStory(8)}>
                Cerita 9
              </button>
              <button className='button-text' onClick={() => openStory(9)}>
                Cerita 10
              </button>
            </div>
          </div>
        </div>
        <div className='cerita'>
          <h1>{storyArr[currentIndex].judul}</h1>
          <div className="cerita-content">
            <p>{storyArr[currentIndex].story}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;