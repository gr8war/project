import React from 'react';
import './Homepage.css';
import HEADER from '../Navbar/navbar.jsx';

function HomePage() {
  return (
    <div>
      <HEADER/>
      
    
    <div class="content middle">
    <div className='mg'>
      <div className='spor'>
      <h1>AlgoRhythm‘ə Xoş Gəlmisiniz!</h1>
      <p>Nə təklif edirik?</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      <div className='infobox'>
      <p><h2>Sadə İzah</h2> <br />
      İstifadəçilər minimal<br />
proqramlaşdırma bilikləri ilə<br />
rahatlıqla mövzuları analiz edə<br />
və tətbiq edə biləcəklər.<br />
<br />
Mövzuların xronoloji ardıcıllığı<br />
məqsədli şəkildə dizayn<br />
edilərək istifadəçiləri<br />
qarşılaşacağı qaranlıq<br />
məqamlardan sığortalayır!</p>
      </div>
      <div className='infobox'>
      <p><h2>Praktiki Təhsil</h2> <br />
      İstifadəçilər öyrəndikləri <br />
mövzuları tətbiq etmə şansı <br />
əldə edərək biliklərini <br />
möhkəmləndirə və yeni <br />
mövzulara keçid edə bilərlər. <br />
<br />
Hər mövzu üçün təmin <br />
olunmuş müxtəlif təsvirə malik <br />
tapşırıqlar istifadəçilərə fərqli <br />
tətbiq sahələri vəd edir.</p>
      </div>
      <div className='infobox'>
      <p><h2>Diskussiya</h2> <br />
      İstifadəçilər icma panelindən <br />
      istifadə edərək mövzular və <br />
      ya tapşırıqlar haqqında sual <br />
      verə, mövcud sualları <br />
      cavablandıra bilərlər.<br />
<br />
İnteraktiv öyrənmə üsulu ilə,<br />
istifadəçilər asanlıqla çətinlik<br />
çəkdiləri məqamlarda digər<br /> istifadəçilərdən 
yardım ala bilirlər.</p>
      </div>
    </div>
        </div>
    </div>
    </div>
  );
}

export default HomePage;
