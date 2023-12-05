/*
shower-gel.png
airy-moisture-conditioning-treatment.png
airy-moisture-shampoo.png
all-in-one-leave-in-conditioner.png
blonde-perfecting-purfle-shampoo.png
brumes-du-maroc.png
intense-curl-cream.png
intense-hydrating-mask.png
luminous-hairspray.png
moroccanoil-treatment-light.png
moroccanoil-treatment-original.png
restorative-hair-mask.png
*/

const quizzes = [
    { identifier: 1, product: 'brand', question: '모로칸오일은 제조공장에서 장애인을 채용하며 사회적 가치를 중요하게 생각하는 브랜드이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 2, product: 'brand', question: '모로칸오일 전 상품에 재활용 가능성을 염두에 둔 디자인으로 환경을 생각하는 브랜드이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 3, product: 'material', question: '모로칸오일의 핵심 성분인 아르간 오일은 모로칸 지방에서 생산되는 최고급 오일만을 사용한다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 4, product: 'material', question: '모로칸오일의 핵심 성분인 아르간 오일은 항산화 성분과 비타민E가 다량 함유 되어있다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 5, product: 'treatment', question: '모로칸오일 트리트먼트 오리지널 상품은 올리브영 어워즈 헤어케어 1위 상품으로 선정되었다.', answer: true, explanation: undefined, image: 'moroccanoil-treatment-original.png' },
    { identifier: 6, product: 'treatment', question: '모로칸오일 트리트먼트는 오리지널 상품만 판매 중이다.', answer: false, explanation: '모로칸오일 트리트먼트는 오리지널 / 라이트 2종류의 상품이 판매 중이다.', image: 'moroccanoil-treatment-original.png' },
    { identifier: 7, product: 'treatment', question: '모로칸오일 트리트먼트의 권장 사용법으로는 바짝 바른 머리에 대량으로 도포해야만 한다.', answer: false, explanation: '모로칸오일 트리트먼트의 권장 사용법으로는 타월 드라이한 상태에서 소량씩 레이어링하며 자연건조 혹은 블로우 드라이 하여 흡수시켜 줍니다.', image: 'moroccanoil-treatment-original.png' },
    { identifier: 8, product: 'treatment', question: '모로칸오일 트리트먼트는 모발에 윤기를 주며 탈모 예방에 도움을 주는 상품이다.', answer: false, explanation: '모로칸오일 트리트먼트는 모발에 윤기와 회복에 도움이 되지만, 탈모 예방성분은 함유되어 있지 않다.', image: 'moroccanoil-treatment-light.png' },
    { identifier: 9, product: 'treatment', question: '모로칸오일 트리트먼트는 헤어케어, 컨디셔닝, 스타일링, 피니시까지 모두 가능한 올인원-헤어 케어 오일이다.', answer: true, explanation: undefined, image: 'all-in-one-leave-in-conditioner.png' },
    { identifier: 10, product: 'intense curl', question: '모로칸오일 인텐스 컬크림은 사용 즉시 모발이 딱딱하게 굳으며, 백탁현상이 잘 일어나는 상품이다.', answer: false, explanation: undefined, image: 'intense-curl-cream.png' },
    { identifier: 11, product: 'brumes du maroc', question: '모로칸오일 바디&헤어 미스트 인 브룸드 마로크 상품은 여러 향이 있다.', answer: false, explanation: '모로칸오일 바디&헤어 미스트 인 브룸드 마로크 상품은 한가지 향만 출시되어있다.', image: 'intense-curl-cream.png' },
    { identifier: 12, product: 'airy moisture', question: '에어리 모이스처 샴푸&컨디셔닝 트리트먼트 상품은 아시아인에 적합하게 최초로 개발된 상품이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 13, product: 'airy moisture', question: '에어리 모이스처 샴푸&컨디셔닝 트리트먼트의 주 성분으로는 히알루론산, 플럼추출물, 아르간 오일이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 14, product: 'airy moisture', question: '에어리 모이스처 샴푸&컨디셔닝 트리트먼트 상품은 극손상, 탈색모 고객에 권장하는 추천 상품이다.', answer: false, explanation: '에어리 모이스처 샴푸&컨디셔닝 트리트먼트 상품은 축 처지고 건조한 모발로 헤어볼륨감이 고민인 고객 혹은 유분기가 많은 두피고객에 권장상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 15, product: 'intense hydrating mask', question: '인텐스 하이드레이팅 마스크 상품은 모발이 손상되고, 염색 및 펌을 자주하는 고객님께 권장하는 추천 상품이다.', answer: false, explanation: '인텐스 하이드레이팅 마스크 상품은 모발이 푸석거리고 건조한 고객님께 권장하는 추천 상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 16, product: 'restorative hair mask', question: '리스토러티브 헤어 마스크 상품은 모발이 푸석거리고 건조한 고객님께 권장하는 추천 상품이다.', answer: false, explanation: '리스토러티브 헤어 마스크 상품은 모발이 손상되고, 염색 및 펌을 자주하는 고객님께 권장하는 추천 상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 17, product: 'all in one conditioner', question: '올인원 리브인 컨디셔너 상품은 촉촉한 액상오일 타입 제형이다.', answer: false, explanation: '올인원 리브인 컨디셔너 상품은 촉촉한 밀키한 크림 타입 제형이다', image: 'intense-curl-cream.png' },
    { identifier: 18, product: 'all in one conditioner', question: '올인원 리브인 컨디셔너 상품은 최대 48시간 부드러운 머릿결 유지에 도움이 된다.', answer: false, explanation: '올인원 리브인 컨디셔너 상품은 최대 72시간 부드러운 머릿결 유지에 도움이 된다', image: 'intense-curl-cream.png' },
    { identifier: 19, product: 'all in one conditioner', question: '올인원 리브인 컨디셔너 상품은 바르고 씻어내는 상품으로 수분감과 모발 컨디셔닝에 도움을 준다.', answer: false, explanation: '올인원 리브인 컨디셔너 상품은 바르고 씻지 않는 노워시 상품으로 수분감과 모발 컨디셔닝에 도움을 준다', image: 'intense-curl-cream.png' },
    { identifier: 20, product: 'all in one conditioner', question: '올인원 리브인 컨디셔너 상품은 열손상으로부터 모발을 보호하는 올인원 수분 에센스이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 21, product: 'brand', question: '12월 올리브영에서 모로칸오일 트리트먼트 한정기획(50ml+15ml)으로 판매 중이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 22, product: 'blonde perfecting purple shampoo', question: '블론드 퍼펙팅 퍼플 샴푸는 탈색,금발, 애쉬컬러, 백모에 옐로우 톤을 보정해주는 상품으로 갈색갈 샴푸이다.', answer: false, explanation: '블론드 퍼펙팅 퍼플 샴푸는 탈색,금발, 애쉬컬러, 백모에 옐로우 톤을 보정해주는 상품으로 보라색 샴푸이다.', image: 'intense-curl-cream.png' },
    { identifier: 23, product: 'blonde perfecting purple shampoo', question: '블론드 퍼펙팅 퍼플 샴푸는 퍼플샴푸로 모발전체를 마사지 후 바로 행구어 내야하는 상품이다.', answer: false, explanation: '블론드 퍼펙팅 퍼플 샴푸는 퍼플샴푸로 모발전체를 마사지 후 3~5분 두었다가 깨끗이 행구어 내야하는 상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 24, product: 'luminous hairspray', question: '루미너스 헤어 스프레이는 자연스러운 고정력과 모발에 광택을 부여하는 상품으로, 고데기 아이론 사용시 사용불가한 상품이다.', answer: false, explanation: '루미너스 헤어 스프레이는 자연스러운 고정력과 모발에 광택을 부여하는 상품으로, 고데기 아이론 사용 전후 같이 사용가능한 상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 25, product: 'volumizing mist', question: '볼류마이징 미스트 상품은 최대 72시간지속되는 볼륨으로 백탁현상없이 헤어롤과 함께 앞머리 픽서로 사용가능한 상품이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 26, product: 'mending infusion', question: '멘딩 인퓨전 상품은 갈라진 모발 끝을 즉각적으로 결속시키는 모발세럼이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 27, product: 'hand wash', question: '모로칸오일 핸드워시에는 아르간오일, 히알루론산이 함유되어 세정하는 동안에도 영양을 공급하는 상품이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 28, product: 'shower gel fragrance', question: '모로칸오일 샤워젤 프래그런스 상품은 샤워젤 안에 캡슐형태의 고농축 아르간오일을 함유하고 있다.', answer: false, explanation: '모로칸오일 샤워젤 프래그런스 상품은 샤워젤 안에 캡슐형태는 없지만 아르간오일을 함유하고 있어 샤워시 영양감과 케어에 도움이되는 상품이다.', image: 'intense-curl-cream.png' },
    { identifier: 29, product: 'shower gel fragrance', question: '모로칸오일 샤워젤 프래그런스 상품은 스크럽효과로 바디 각질제거에 효과적인 상품이다.', answer: false, explanation: '모로칸오일 샤워젤 프래그런스 상품은 스크럽효과는 없지만 샤워 후 수분감과 영양감을 채워주는 상품이다', image: 'intense-curl-cream.png' },
    { identifier: 30, product: 'hand cream', question: '모로칸오일 핸드크림의 주성분으로 아르간오일 ,코코아버터, 시어버터, 히알루론산이 있으며, 실키하고 부드럽게 수분이 유지되도록 도와준다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 31, product: 'signature scent', question: '모로칸오일 시그니처향은 스파이시 앰버, 매그놀리아, 우디 노트의 조합으로 블렌딩 되어있다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 32, product: 'shampoo', question: '모로칸오일 샴푸는 알카리성으로 PH 45 ~ 5 사이이다.', answer: false, explanation: '모로칸오일 샴푸는 약산성성으로 PH 45 ~ 5 사이이다.', image: 'intense-curl-cream.png' },
    { identifier: 33, product: 'body', question: '모로칸오일 바디 상품은 지중해 바다, 모래, 부드러운 바람에서 영감을 받았다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 34, product: 'treatment', question: '모로칸오일 트리트먼트의 양쪽 음각 위치에 따라 정품을 구별할 수 있다.', answer: false, explanation: '모로칸오일 트리트먼트의 양쪽 음각 위치에 따라 정품을 구별할 수 없으므로, 공식 수입업체 및 인증받은 업체에 구매할 것을 장려한다.', image: 'intense-curl-cream.png' },
    { identifier: 35, product: 'brand', question: '모로칸오일 상품은 헤어스타일리스트가 개발한 상품이다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
    { identifier: 36, product: 'brand', question: '모로칸오일 트리트먼트의 성분배합 레시피는 뉴욕타임스에서 코카콜라 다음으로 중요한 레시피라고 언급했다.', answer: true, explanation: undefined, image: 'shower-gel.png' },
];
