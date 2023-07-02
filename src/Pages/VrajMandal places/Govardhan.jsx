import React, { useState } from 'react'
import "../../App.css"
import { Videos, Photos, More, Lectures } from '../VrajMandalResources'

const Govardhan = () => {
  const [a,sa]=useState(0)
  const [b,sb]=useState(0)
  const [c,sc]=useState(0)
  const [d,sd]=useState(0)
  const [e,se]=useState(0)
  const [f,sf]=useState(0)
  const [g,sg]=useState(0)
  const [page,setpage]=useState(2)
  return (
    <div>
      {page===1 && <div style={{marginTop:"5%",marginLeft:"8%",marginRight:"5%"}}>
      <h1 style={{color:"red"}}>Govardhvan</h1>
      <div>

      <h3  className="t" onClick={()=>{sa(1-a);console.log(a)}}>Glories of GOVARDHAN {a===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
  <div style={{display:(a===1?"block":"none")}}><p>
    O Govardhana, O king of mountains, O hill whose nectarian name the best of
    Hari's servants flows from the moon like mouth of Sri Radha,O hill that the
    Vedas declare to be the tilaka marking of Vraja, please grant me a residence
    near to you.
  </p>
  <p className="quote">Stavavaii, Ragunatha dasa Gosvami</p>
  <p>
    Govardhana Hill is acknowledged throughout the Vedic scripture's as the most
    sacred mountain not only in the whole of India, but in all the three worlds.
    It is therefore no wonder that when Govardhana Hill appeared, all the great
    mountains of the universe came and worshiped him as their king. They also
    declared that Govardhana had descended from Goloka Vrndavana in the
    spiritual world and is the crown jewel of Vraja. The Vedas also inform us
    that Govardhana Hill is understood in two different ways. First, as the
    greatest devotee of Lord Krsna, and second as being non-different from Lord
    Krsna Himself.
  </p>
  <p>
    Before the beautiful gopis of Vrndavana, Srimati Radharani praised
    Govardhana Hill as the very best servant (Haridasa-varya) of Lord Krsna in
    the following words:
  </p>
  <p className="emphasis">
    Of all the devotees, this Govardhana Hill is the best! O my friends, this
    hill supplies Krsna and Balarama, along with their calves, cows and cowherd
    friends, with all kinds of necessities --water for drinking, very soft
    grass, caves, fruits, flowers andvegetables. In this way the hill offers
    respects to the Lord.Being touched by the lotus feet of Krsna and
    Balarama,Govardhana Hill appears very jubilant.
  </p>
  <p className="quote">Srimad-Bhagavatam 10.21.18</p>
  <p>
    As the best servant, Govardhana Hill provides Krsna and Balarama and the
    inhabitants of Vrndavana with all the necessities of life. Cool fragrant
    drinking water from its many waterfalls, pure honey, mango juice and pilu
    juice, wonderful varieties of, herbs, roots, fruits, creepers and fresh
    flowers. Govardhana also provides various minerals and precious gems that
    the cowherd boys use to decorate Krsna and Balarama and themselves as well.
  </p>
  <p>
    This sacred hill also provides deep caves where Krsna and Balarama rest and
    take shelter against the rain and the scorching sun. Krsna also enjoys many
    intimate loving pastimes with Srimati Radharani in these same caves.
    Govardhana Hill also provides a special kind of soft, fragrant grass that
    makes the cows strong and healthy. This grass also helps increase the cow's
    milk production, which is used to make pure ghee for the sacrificial fire
    and cooking. The milk is also turned into butter, yogurt, cheese and an
    amazing variety of milksweets.
  </p>
  <p>
    Considering that milk is the economic backbone of the inhabitants of
    Vrndavana, it is no wonder that Lord Krsna advised the Vrajavasis to stop
    the sacrifice to Lord Indra and worship Govardhana Hill instead. Govardhana
    Hill also provides Lord Krsna with a stage to perform His innumerable
    transcendental loving pastimes with the beautiful damsels of Vraja and with
    His many cowherd boyfriends.
  </p>
  <p>
    The Vedas also say that Govardhana Hill is non-different from the Supreme
    Personality of Godhead, Lord Krsna Himself. When Sri Caitanya Mahaprabhu
    visited Vraja in the year 1515, He refused to climb Govardhana Hill because
    He saw that Govardhana was non-different from Lord Krsna. At the time of the
    annakuta ceremony, Krsna declared that He was non-different from Govardhana
    Hill: Krsna then assumed an unprecedented huge form to instill faith in the
    cowherd men declaring, `I am Govardhana Mountain!' He ate the abundant
    offerings. Together with the people of Vraja, the Lord bowed down to
    Govardhana Hill, thus in effect offering obeisances to Himself Then He said,
    " Just see how this hill has appeared in person and bestowed mercy upon us!
  </p>
  <p className="quote">Srimad-Bhagavatam 10.24.35-6</p>
  <p>
    Because Govardhana Hill is non-different from Krsna Himself, the rocks from
    Govardhana are worshipable just like a Deity of Krsna, In fact, the stones
    known as Govardhana-silas do not even need to be installed as they are
    already considered to be worshipable. Many great devotees have worshiped
    these silas from Govardhana Hill. These devotees include Sanatana Gosvami
    and Raghunatha dasa Gosvami, as well as Lord Caitanya Mahaprabhu Himself.
    Govardhana Hill should be envisioned to be in the shape of a peacock resting
    with its head tucked into its side. The peacocks face is considered to be
    the beautiful Kusuma- sarovara, its neck is Manasi- ganga, its mouth
    Mukharavinda. In Govinda lilamrita Krishna Dasa Kaviraja Goswami says its
    two eyes are Radha-kunda and Syama-kunda it's ears Gvala Pokhara, the
    beginning of its tail is Balarama Sthali, and the end of its tail is
    Punchari-kunda (Naval-kunda).
  </p>
  </div>
  <div>
    <h3 className="t" onClick={()=>{sb(1-b);console.log(b)}}>Apperance {b===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3>
    <div style={{display:(b===1?"block":"none")}}>
  <p>
    Lord Krishna's father Nanda Maharaja once enquired from his
    brother Upananda how Govardhana hill had appeared in the sacred land of
    Vrindavana. Upananda replied that King Pandu, father of the Pandavas, had
    asked this very question to Grandfather Bhishma, was had narrates the
    following story from the Garga Samhita: One day in Goloka Vrindavana Lord
    Krishna informed Srimati Radharani that She should now appear on earth as it
    was time for Them to perform Their transcendental pastimes within the
    material world. Radharani replied that unless Vraja Dhama, the Yamuna and
    Govardhana Hill were present there, She would not be very happy. Krsna then
    told Radharani that She need not worry as Vraja Dhama, along with the Yamuna
    and Govardhana Hill had already appeared on earth.
  </p>
  <p>
    Many years before this incident, in the land of Shalmali dvipa, the wife of
    the great mountain Dronacal gave birth to a son named Govardhana. At the
    time of Govardhana's birth all the demigods appeared in the sky and showered
    flowers upon him. The great mountains, led by the Himalayas and Sumeru, came
    there to offer their respects. They then performed parikrama of Govardhana
    and accepted him as their king. They offered very nice prayers praising
    Govardhana for having descended from Goloka Vrindavana, describing him as
    the "crown jewel of Vraja." Some years later, at the beginning of
    Satya-yuga, the great sage Pulastya Muni paid a visit to Shalmali dvipa.
    Upon seeing the beautiful Govardhana Hill covered with many lovely creepers,
    flowers, rivers, caves and chirping birds, the sage felt that this hill was
    capable of giving liberation. He then went to meet Dronacal, who immediately
    offered his respects and inquired from the sage what service he could
    render.
  </p>
  <p>
    Pulastya Muni informed Dronacal that he was from Kashi (Benares) and was on
    pilgrimage to all the holy places. And he said that even though the sacred
    river Ganges flows through Kashi, there is no beautiful hill. He then asked
    Dronacal to give Govardhana to him so that he could perform his austerities
    sitting on top of the hill. On hearing the sage's request, Dronacal, who was
    not willing to part with his son, started to shed tears in thought of
    separation from his beloved Govardhana. Not wanting to see Pulastya Muni
    become angry and curse his father, Govardhana asked the sage how he would
    carry him all the way to Kashi. The sage replied that he would carry him in
    his right hand. Govardhana then agreed to go with the sage on one condition
    that if the sage put him down anywhere during the course of the journey, he
    would not be able to lift him again. Pulastya Muni agreed. Carrying
    Govardhana in his right hand he left for Kashi.
  </p>
  <p>
    By the will of providence Pulastya Muni passed through Vraja on his way to
    Kashi. On arriving in Vraja, Govardhana thought that now he was here he
    should remain in the holy dhama. By his mystic power he was able to
    influence Pulastya Muni to attend to the call of nature. Unmindful, the sage
    put Govardhana down and went off to answer the call. But when he returned he
    was unable to lift Govardhana again. Trying with all his might, using both
    hands, he could not lift Govardhana even slightly.
  </p>
  <p>
    In great anger Pulastya Muni then became angry and cursed Govardhana to sink
    into the ground by the measurement of one mustard seed every day. When
    Govardhana first came to Vraja in the beginning of Satya-yuga, it is said
    that Govardhana at that time was 115 km (64 miles) long, 72 km (40 miles)
    wide and 29 km (16 miles) high. Now the hill is only 80 feet high at its
    highest point. It is said that after ten thousand years of the Kali-yuga
    Govardhana will have completely disappeared. It is said by Acaryas that
    Govardhana is decreasing in size because of separation from Lord Krishna.
  </p>
  <p>
    After narrating the wonderful story of Govardhana's appearance, Sunanda
    informed Nanda Maharaja that as long as Govardhana Hill and the river Yamuna
    remained manifest, Kali-yuga would not take its full effect. Sunanda also
    said that anyone who is fortunate enough to hear the description of the
    appearance of Govardhana Hill would be freed from all sins.
  </p>
  </div>
  <div className="t" onClick={()=>{se(1-e);console.log(e)}}>
  <h3>Stories {e===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3></div>
  <div style={{display:(e===1?"block":"none")}}>
  <p>
    {" "}
    Another story about Govardhana dill is that the monkey army of Lord Rama was
    carrying different stones to construct a bridge to Lanka. This happened in
    Treta Yuga, when Lord Rama was getting ready to attack Lanka. Hanuman was
    carrying Govardhana from the Himalayas to help built the bridge. This was on
    the fifth day of construction. As Hanuman was carrying Govardhana over
    Braja, Nala and Neela, who were in charge of building the bridge declared
    that it was completed and no more stones were needed. When Hanuman heard
    this, he was in Braja Mandala and he placed Govardhana there. Govardhana
    then starting crying that he was lost in two ways. Now he was taken away
    from being close to Lord Siva, who lives in the Himalayas and he would not
    be able to be used in the service of Lord Rama and therefore, be able to see
    Him. Rama heard about Govardhana crying and said that in Dwapara Yuga he
    would be born as Sri Krishna and would hold Govardhana up for seven days and
    nights to save the residents of Braja.
  </p>
  <p className="quote"> Govardhana Puja Story (Krishna Book, Chap. 24)</p>
  <p>
    During Dwapara Yuga, Lord Krishna convinced the cowherd men to worship
    Govardhana, instead of doing a sacrifice to please Lord Indra, the king of
    heaven, who is charge of the rain. Krishna told the cowherd men that
    Govardhana Hill was supplying so many necessities and should be worshiped
    instead.
  </p>
  <p>
    {" "}
    "His reasons for discouraging the sacrifice performed to please Indra were
    twofold. First, as stated in the Bhagavad gita there is no need to worship
    the demigods for any material advancement; all results derived from
    worshiping the demigods are simply temporary, and only those who are less
    intelligent are interested with temporary results. Secondly, whatever
    temporary result one derives from worshiping the demigods is actually
    granted by the permission of the Supreme Personality of Godhead.
  </p>
  <p>
    {" "}
    "Lord Caitanya has recommended that since Krishna is worshipable, so His
    land, Vrindavana and Govardhana Hill, arealso worshipable. To confirm this
    statement, Lord Krishna said that Govardhana Puja is as good as worship of
    Him. From that day, Govardhana Puja has been going on, and is known as
    Annakuta. In all the temples of Vrindavan or outside of Vrindavana, huge
    quantities of food are prepared in this ceremony and are very sumptuously
    distributed to the general population. "The .cowherd men headed by Nanda
    Maharaja performed Govardhana worship and circumambulation of the hill.
    Nanda Maharaja and the cowherd men called in learned brahmanas and began to
    worship Govardhana Hill by chanting Vedic hymns and offering prasadam. The
    inhabitants of Vrindavana assembled together, decorated their cows and gave
    them grass. Keeping the cows in front, they began to circumambulate
    Govardhana Hill. The gopis also dressed themselves very luxuriantly and sat
    in bull- driven carts, chanting the glories of Krishna's pastimes.{" "}
  </p>
  <p>
    Assembled there to act as priests for Govardhana Puja, the brahmanas offered
    their blessing to the cowherd men and their wives, the gopis. When
    everything was complete, Krishna assumed a great transcendental form and
    declared to the inhabitants of Vrindavana that He was Himself Govardhana
    Hill in order to convince the devotees that Govardhana Hill and Krishna
    Himself are identical. Then Krishna began to eat all the food offered there.
    The identity of Krishna and Govardhana Hill is still honored, and great
    devotees take rocks from Govardhana Hill and worship them exactly as they
    worship the Deity of Krishna in the temples. Devotees therefore collect
    small rocks or pebbles from Govardhana Hill and worship them at home,
    because this worship is as good as Deity worship. The form of Krishna who
    began to eat the offering was separately constituted, and Krishna Himself
    along, with other inhabitants of Vrindavana began to offer obeisances to the
    Deity as well as Govardhana Hill."{" "}
  </p>
  <p>
    After the cowherd men worshiped Govardhana Hill, Lord Indra became angry
    that he was not worshiped. He then sent torrents of rain upon Vrindavana.
    The residents of Vrindavana then approached Lord Krishna for help. Krishna
    then lifted Govardhana Hill and held it over the residents of Vrindavana
    like an umbrella.
  </p>
  <p>
    {" "}
    "The inhabitants of Vrindavana and their animals remained there for one week
    without being disturbed by hunger, thirst or any other discomforts. They
    were simply astonished to see how Krishna was holding up the mountain with
    the little finger of His left hand. Seeing the extraordinary mystic power of
    Krishna, Indra, the King of heaven, was thunderstruck and baffled in his
    determination. He immediately called for all the clouds and asked them to
    desist."
  </p>
  <p>
    {" "}
    After this, Indra came along with a Surabhi cow and offered prayers to Lord
    Krishna and then worshiped Him.
  </p>
  <p />
  <p />
  <p />
  </div>
  <div  className="t" onClick={()=>{sc(1-c);console.log(c)}} >
  <h3> Lord Caitanya at Govardhana Hill (From Caitanya Caritamrita) {c===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3></div>
  <div style={{display:(c===1?"block":"none")}}>
  <p>
    When Lord Caitanya saw Govardhana Hill, He immediately offered obeisances,
    falling down on the ground like a rod. He embraced one piece of rock from
    Govardhana Hill and became mad. Just by seeing Govardhana Hill, Sri Caitanya
    Mahaprabhu became ecstatic with love of Krishna. While dancing and dancing
    and dancing, He recited the following verse from the Srimad Bhagavatam:
  </p>
  <p>
    "Of all the devotees, this Govardhana Hill is the best! O My friends, this
    hill supplies Krishna and Balarama as well as Their calves, cows and cowherd
    friends with all kinds of necessities water for drinking, very soft grass,
    fruits, flowers and vegetables. In this way the hill offers respect to the
    Lord. Being touched by the lotus feet of Krishna and Balarama, Govardhana
    Hill appears very jubilant." Lord Caitanya first bathed in Manasi Ganga and
    then took darshan of Harideva before doing Govardhana parikrama.
  </p>
  <p>
    Lord Caitanya instructed: "One should remain in Vrindavana for only a short
    time and then return here as soon as possible. Also, do not climb Govardhana
    Hill to see the Gopala Deity."
  </p>
  </div>
  <div className="t" onClick={()=>{sd(1-d);console.log(d)}}>
  <h3>Govardhana Shilas {d===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3></div>
  <div style={{display:(d===1?"block":"none")}}>
  <p>
    Devotees take rocks from Govardhana Hill and worship them exactly as they
    worship the Deity of Krishna in the temple. This worship is as good as Deity
    worship. Lord Krishna has appeared as Govardhana-shila (a stone from the
    hill), so that His devotees may render service to Him. It is important that
    not just anyone takes a rock from Govardhana Hill. The right to worship a
    Govardhana-shila should be given only by the guru (spiritual master). So his
    permission should be taken before beginning worship.
  </p>
  <p>
    Getting To Govardhana Hill Govardhana Hill is 26 km (14 miles) west of
    Mathura. By car it takes about forty-five minutes to get to Govardhana Hill
    from Vrindavana. As Govardhana Hill and Radha Kunda are right next to each
    other, both can easily be visited on the same trip.

  </p></div>
  
  <div className="t" onClick={()=>{sf(1-f);console.log(f)}}>
  <h3>Parikrama {f===0?<img src="down.png" alt="" width="15px"></img>:<img src="side.png" alt="" width="15px"></img>}</h3></div>
  <div style={{display:(f===1?"block":"none")}}>
  <>
  <p>Parikrama It is the form of worship to walk around Govardhana hill.</p>
  <p>
    To the West of Mathura, at a distance of two yojanas, is Govardhana, the
    topmost holy place. Anyone who performs its parikrama will never have to
    take birth in this world again. - Varaha Purana Rupa Goswami stated in his
    Mathura mahatmya that one should first bathe in Manasi Ganga and then take
    darshan of Harideva before starting parikrama.
  </p>
  <p>
    INSTRUCTIONS FOR PERFORMING PARIKRAMA In Vraja-bhakti-via the following
    <ol>
            <li>One should offer proper respect to all the Deities, cows, brahmanas, trees, creepers, rocks, and kundas one sees.</li>
            <li>One should not offend any living entity, moving or non-moving; otherwise, one will lose the benefits of his parikrama.</li>
            <li>While performing parikrama, one should not wear shoes or leather items, and one's cloth should be freshly washed.</li>
            <li>One must observe brahmacarya and take a bath as well as clean teeth before starting parikrama.</li>
            <li>One should not perform parikrama at night.</li>
            <li>While performing parikrama, one should move carefully so as not to kill any living entities on the path.</li>
            <li>If one becomes sick during parikrama, one should stop and take rest. Parikrama should be continued after health is regained.</li>
            <li>One should not leave his parikrama uncompleted.</li>
            <li>Women should not perform parikrama during their menstrual period.</li>
            <li>One should not strain himself while performing parikrama.</li>
          </ol>
  </p>
  <p>
    The parikrama route around Govardhana hill is 25km. There is also a 40 km
    outer parikrama path. Sanatana Gosvami would do the outer parikrama while he
    was staying at Govardhana hill. The average person goes around Govardhana
    hill in six or seven hours.
  </p>
</>
  </div>
  <div style={{height:"50px"}}></div>
  </div>
      </div>
         </div>
         }
      {page===2 && <div> <Lectures/></div>}
      {page===3 && <div> <Videos/></div>}
      {page===4 && <div> <More/></div>}
      <div className='footer' style={{display:"flex"}}>
      <div onClick={()=>{setpage(3)}} style={{width:"25%",float:"left"}}>
          <div>Videos</div>
          <div style={{height:"3px",backgroundColor:(page===3?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(1)}} style={{width:"25%",float:"left",height:"20px"}}>
          <div>Read</div>
          <div style={{height:"3px",backgroundColor:(page===1?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(2)}} style={{width:"25%",float:"left"}}>
          <div>Lectures</div>
          <div style={{height:"3px",backgroundColor:(page===2?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(4)}} style={{width:"25%",float:"left"}}>
          <div>More</div>
          <div style={{height:"3px",width:"70%",marginLeft:"15px",backgroundColor:(page===4?"white":"")}}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Govardhan