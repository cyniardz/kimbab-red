# CLAUDE.md — 김밥천국 레드

이 파일은 이 저장소에서 작업하는 Claude를 위한 인계 메모입니다.

## 프로젝트
- 김밥천국의 매운맛 서브 브랜드 '김밥천국 레드' 웹사이트. 웹 디자이너 취업용 포트폴리오.
- 캐릭터 이름: 맵파민. 맵기 3단계(Lv1~Lv3).
- 실제 서버 없음. 신청, 인증, 주문은 모두 프론트엔드 시연.

## 파일 구조 (반드시 유지)
- `index.html`, `style.css`, `script.js` 3개 파일과 `img/` 폴더만 사용한다.
- 새 파일이나 라이브러리, 프레임워크를 추가하지 않는다.
- 해시 라우팅 SPA. 화면은 `section.view`(id: viewMain, viewBrand, viewMenu, viewEvent, viewStore, viewNotice, viewFr, viewVoice, viewPoem, viewKit, viewOrder).
- 저장소 키: 응모 기록 `localStorage["kr_entries"]`, 주문 정보 `sessionStorage["kr_order"]`.

## 디자인 규칙
- 색상은 `style.css`의 `:root` 변수만 사용한다 (--red, --ink, --cream, --cream-2, --sub, --yellow, --lv1~3, --line).
- 글꼴: 제목 Black Han Sans, 본문 Noto Sans KR.
- 기준 폭: 데스크톱 1920, 모바일 390.
- 매장은 대전 4곳으로 고정. 지도는 구글 지도 iframe(키 없음).

## 작업 규칙
- 사용자가 요청한 부분만 수정한다. 요청하지 않은 문구, 레이아웃, 구조는 바꾸지 않는다.
- 화면 문구를 임의로 다듬거나 바꾸지 않는다. 문구 수정은 명시적으로 요청받았을 때만 한다.
- 주석은 최소한으로, 한국어로 짧게.
- 코드 정리 형식: prettier, print-width 100.
- 수정 후 데스크톱과 모바일 폭 모두에서 화면이 깨지지 않는지 확인한다.

## 사용자 응답 방식
- 한국어로, 전문가 관점에서 명확하고 간결하게. 이모지 사용 안 함.
- 질문이 모호하면 추측하지 말고 먼저 되묻는다.
- 답변 끝에 후속 질문 q1, q2, q3을 붙인다.
