/*
 * 비밀의 아이프리 마이캐릭터 파츠표 - 이미지 설정 파일
 *
 * 이미지 추가 방법:
 * 1. 이미지 파일을 해당 종류의 images 하위 폴더에 넣습니다.
 * 2. 아래 해당 파츠의 images 배열에 { name: "표시할 이름", file: "images/폴더/파일명.png" } 을 추가합니다.
 * 3. 파일명은 대소문자까지 정확히 일치해야 합니다.
 *
 * 예:
 * { name: "페이스 샘플 A", file: "images/face/face-a.png" },
 *
 * 이미지 배열은 원하는 만큼 추가할 수 있습니다. 각 파츠의 선택창에는 해당 파츠의 이미지만 나타납니다.
 */
window.PARTS_CONFIG = [
  { id: "face", name: "페이스", images: [
     { name: "귀여운", file: "images/face/otome.webp" },
     { name: "활기찬", file: "images/face/genki.webp" },
     { name: "온화한", file: "images/face/honwaka.webp" },
     { name: "순수한", file: "images/face/hitamuki.webp" },
     { name: "발랄한", file: "images/face/haturatu.webp" },
     { name: "뷰티", file: "images/face/beauty.webp" },
     { name: "로맨틱", file: "images/face/romantic.webp" },
     { name: "미스테리어스", file: "images/face/mystery.webp" },
    
  ]},{ id: "voice", name: "보이스", images: [
     { name: "활기찬", file: "images/voice/iki.webp" },
     { name: "온화한", file: "images/voice/funwari.webp" },
     { name: "당당한", file: "images/voice/massugu.webp" },
     { name: "쿨한", file: "images/voice/cool.webp" },
     { name: "우아한", file: "images/voice/yuuga.webp" },
     { name: "귀여운", file: "images/voice/kawaii.webp" },
  ]},
  { id: "skin", name: "피부", images: [
     { name: "A", file: "images/skin/a.webp" },
     { name: "B", file: "images/skin/b.webp" },
     { name: "C", file: "images/skin/c.webp" },
     { name: "D", file: "images/skin/d.webp" },
     { name: "E", file: "images/skin/e.webp" },
     { name: "F", file: "images/skin/f.webp" },
  ]},
  { id: "bangs", name: "앞머리", images: [
     { name: "돌리", file: "images/bangs/dori.webp" },
     { name: "산뜻한 사선 커트", file: "images/bangs/sawayaka.webp" },
     { name: "핸섬 커트", file: "images/bangs/han.webp" },
     { name: "스트라이트 뱅", file: "images/bangs/patun.webp" },
     { name: "사이드 뱅", file: "images/bangs/naname.webp" },
     { name: "프린세스 커트", file: "images/bangs/ohime.webp" },
     { name: "성숙한 땋은 앞머리", file: "images/bangs/senobi.webp" },
     { name: "하츠네 미쿠 뱅", file: "images/bangs/miku.webp" },
     { name: "P마루사마. 앞머리", file: "images/bangs/pmaru.webp" },
     { name: "어른 원 렝스", file: "images/bangs/otona.webp" },
     { name: "깔끔한 풀뱅", file: "images/bangs/patunm.webp" },
     { name: "눈썹 위 시스루", file: "images/bangs/onmayu.webp" },
     { name: "시스루 사이드 뱅", file: "images/bangs/karoyaka.webp" },
     { name: "롱 커튼", file: "images/bangs/long.webp" },
     { name: "비밀스러운 마이 뱅", file: "images/bangs/himitu.webp" },
     { name: "스위트 C컬 웨이브", file: "images/bangs/utimaki.webp" },
     { name: "유행하는 센터 컷", file: "images/bangs/konare.webp" },
     { name: "부드럽게 말린 사이드 뱅", file: "images/bangs/yurumaki.webp" },
     { name: "오오조라 아카리 드리미 뱅", file: "images/bangs/akari.webp" },
     { name: "화려한 센터 컷", file: "images/bangs/hanayaka.webp" },
     { name: "부드러운 풀뱅", file: "images/bangs/sarasara.webp" },
     { name: "산뜻한 프레시", file: "images/bangs/sawayakaf.webp" },
     { name: "멋진 땋은 앞머리", file: "images/bangs/osyare.webp" },
     { name: "멋낸 시스루", file: "images/bangs/omekasi.webp" },
     { name: "퐁파두르", file: "images/bangs/pon.webp" },
     { name: "아이돌 풀뱅", file: "images/bangs/idol.webp" },
     { name: "아가씨 웨이브", file: "images/bangs/ojou.webp" },
     { name: "M자 뱅", file: "images/bangs/mji.webp" },
     { name: "뿅뿅 인테크", file: "images/bangs/pyon.webp" },
  ]},
  { id: "back-hair", name: "뒷머리", images: [
     { name: "큐티 트윈테일", file: "images/back-hair/1.webp" },
     { name: "깔끔한 쇼트커트", file: "images/back-hair/2.webp" },
     { name: "내추럴 보브", file: "images/back-hair/3.webp" },
     { name: "스타일리쉬 롱", file: "images/back-hair/4.webp" },
     { name: "퓨어 사이드 포니테일", file: "images/back-hair/5.webp" },
     { name: "느슨한 땋은 머리", file: "images/back-hair/6.webp" },
     { name: "모던 쿨 포니테일", file: "images/back-hair/7.webp" },
     { name: "하츠네 미쿠 트윈테일", file: "images/back-hair/8.webp" },
     { name: "P마루사마. 뒷머리", file: "images/back-hair/9.webp" },
     { name: "팝팝 트윈 번", file: "images/back-hair/10.webp" },
     { name: "부드러운 웨이브", file: "images/back-hair/11.webp" },
     { name: "소라 트윈테일", file: "images/back-hair/12.webp" },
     { name: "미디움 빌드펌", file: "images/back-hair/13.webp" },
     { name: "프린스 울프", file: "images/back-hair/14.webp" },
     { name: "초아 롱", file: "images/back-hair/15.webp" },
     { name: "두근두근 트윈테일", file: "images/back-hair/16.webp" },
     { name: "플로라 프린세스", file: "images/back-hair/17.webp" },
     { name: "리리아 롱", file: "images/back-hair/18.webp" },
     { name: "삐쭉삐쭉 사이드", file: "images/back-hair/19.webp" },
     { name: "내추럴 브레이드", file: "images/back-hair/20.webp" },
     { name: "세빈 포니테일", file: "images/back-hair/21.webp" },
     { name: "볼륨 트윈테일", file: "images/back-hair/22.webp" },
     { name: "태리 브레이드", file: "images/back-hair/23.webp" },
     { name: "빙그르 하프 업", file: "images/back-hair/24.webp" },
     { name: "아이리 쇼트커트", file: "images/back-hair/25.webp" },
     { name: "리본 웨이브", file: "images/back-hair/26.webp" },
     { name: "링링 당고", file: "images/back-hair/27.webp" },
     { name: "오오조라 아카리 드리미 세미 롱", file: "images/back-hair/28.webp" },
     { name: "치이 쇼트", file: "images/back-hair/29.webp" },
     { name: "해파리 당고", file: "images/back-hair/30.webp" },
     { name: "치어풀 보브", file: "images/back-hair/31.webp" },
     { name: "부드럽게 말린 포니테일", file: "images/back-hair/32.webp" },
     { name: "부드러운 롱", file: "images/back-hair/33.webp" },
     { name: "원 컬 보브", file: "images/back-hair/34.webp" },
     { name: "클래식 트윈테일", file: "images/back-hair/35.webp" },
     { name: "삐쭉삐쭉 트윈테일", file: "images/back-hair/36.webp" },
     { name: "소녀 하프 업", file: "images/back-hair/37.webp" },
     { name: "심포니 사이드", file: "images/back-hair/38.webp" },
     { name: "부드럽게 말린 트윈테일", file: "images/back-hair/39.webp" },
  ]},
  { id: "hair-color", name: "헤어컬러", images: [
    // { name: "헤어컬러 이름", file: "images/hair-color/hair-color-a.png" },
  ]},
  { id: "highlights", name: "브릿지", images: [
    // { name: "브릿지 이름", file: "images/highlights/highlights-a.png" },
  ]},
  { id: "highlight-color", name: "브릿지 컬러", images: [
    // { name: "브릿지 컬러 이름", file: "images/highlight-color/highlight-color-a.png" },
  ]},
  { id: "eye-color", name: "아이컬러", images: [
    // { name: "아이컬러 이름", file: "images/eye-color/eye-color-a.png" },
  ]},
  { id: "hair-deco", name: "헤어데코", images: [
    // { name: "헤어데코 이름", file: "images/hair-deco/hair-deco-a.png" },
  ]},
  { id: "makeup", name: "메이크업", images: [
    // { name: "메이크업 이름", file: "images/makeup/makeup-a.png" },
  ]},
  { id: "one-point", name: "원포인트", images: [
    // { name: "원포인트 이름", file: "images/one-point/one-point-a.png" },
  ]},
  { id: "onegai-jewel", name: "오네가이 쥬얼", images: [
     { name: "좋아", file: "images/onegai-jewel/suki.webp" },
     { name: "꿈", file: "images/onegai-jewel/yume.webp" },
     { name: "우정", file: "images/onegai-jewel/yuujou.webp" },
     { name: "용기", file: "images/onegai-jewel/yuuki.webp" },
     { name: "정열", file: "images/onegai-jewel/jounetu.webp" },
     { name: "희망", file: "images/onegai-jewel/kibou.webp" },
  ]}
];
