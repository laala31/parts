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
    // { name: "앞머리 이름", file: "images/bangs/bangs-a.png" },
  ]},
  { id: "back-hair", name: "뒷머리", images: [
    // { name: "뒷머리 이름", file: "images/back-hair/back-hair-a.png" },
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
    // { name: "쥬얼 이름", file: "images/onegai-jewel/jewel-a.png" },
  ]}
];
