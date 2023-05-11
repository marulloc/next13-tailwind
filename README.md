# My Interactive & Component UI Libs

-   Next 13
-   Tailwind
-   Three.js
-   canvas

## tailwind

CSS 문서를 보지 않고 빠르게 웹을 빌드 할 수 있게 하는 것이 Tailwind의 목표라고 한다.
이것을 구현하기 위해 utility first 기법을 사용(미리 구현된 css를 사용한다.)

미리 구현된 css 클래스를 사용하다보니 클래스 이름을 정하는 것을 고민하지 않아도 되고
협업할 때도 이미 정해진 규칙을 파악하면 되니까 혼선이 적어진다는 장점이 있다.

tailwind 2 버전에서는 특히 용량관련된 문제가 좀 있었는데
tailwind 3 버전으로 오면서 해당 문제가 어느정도 해소되었다고 한다.

최근 조사에서 만족도 부문 tailwind가 1위를 차지
사용량 부문 tailwind가 bootstrap을 이어 2위를 차지했을 정도로
트렌드로 자리잡았고 DX 측면에서도 빠른기간 안에 개발자들을 만족시키면서
급상승하게 되었다.

특히 vsc에서도 extension이 잘되어있어 클래스명을 사용할 때 자동완성까지 해준다.... 오

-   HTML CSS Support
-   Tailwind CSS Intellisens

그래서 여기서도 ui-library를 구축할 때 tailwind를 적극 사용해보고자 한다.

### setup

tailwind css docs에선 framework 가이드가 나와있다

1.  `yarn workspace @marulloc/ui-library install -D tailwindcss postcss autoprefixer`
    Tailwind를 보좌하는 PostCSS와 Autoprefixer를 설치
    그 가이드를 따라가다보면 tailwindcss와 postcss 그리고 autoprefixer를 설치하게 되는데

        - PostCSS
          PostCSS는 CSS를 변환하는 도구다. 다양한 브라우저와 기기 사이에서도 동일한 CSS를 보이게 하는 것이 매우 중요한데
          PostCSS는 CSS 전처리기로 최신 CSS를 지원하지 않는 브라우저라도 동일한 스타일이 적용되도록 도와주는 것이다.
          (JS에서 Babel과 같은거지 - 그리고 webpack으로 함께 번들링하는 그런 그림)
          Tailwind의 @apply와 같은 고급 기능은 CSS 표준이 아니므로 전처리가 필요하고
          그렇기 때문에 PostCSS를 설치하라고 하는 것이다.
        - Autoprefixer
          Autoprefixer는 PostCSS 플러그인 중 하나로, 벤더 프리픽스를 자동으로 추가하는 도구다.
          벤더 프리픽스란 브라우저에서 새로운 CSS 속성을 지원하기 전에 해당 속성을 지원하는 벤더 접두사를 추가하는 것을 말한다.
          예를 들어 WebKit 기반 브라우저에서는 `-webkit-` 접두사를 사용하고, 모질라 기반 브라우저에서는 `-moz-`접두사를 사용하는 것처럼, 이런 벤더 접수사를 붙여주는 역할을 한다.
          접두사를 붙여야만 브라우저 호환성을 보장할 수 있다.

            - Vendor Prefix
              벤더 프리픽스는 웹 표준으로 정의되기 전에 각 브라우저 회사에서 새로운 CSS 속성을 사용하고자 할때 써야한다.
              Webkit 기반 브라우저(`-webkit-`), 모질라 기반 브라우저(`-moz-`), 마이크로스픝 기반(`-ms-`) 브라우저마다 각자의 프리픽스가 있다.
              예를 들어, `border-radius`는 CSS3 표준이 되었지만, 표준이 되기 전에는
              `-webkit-border-radius` 와 `-moz-border-radius`를 사용해서 테두리에 곡선을 줄 수 있었다.
              따라서 새로운 속성을 사용할 때는 가능한 모든 벤더 프리픽스를 붙여주는 것이 좋다.
              그래야 브라우저 호환성을 보장할 수 있다.

            근데! 여기서 autoprefixer와 같은 것을 사용하면 벤더 프리픽스를 자동으로 붙여준다는 것이지.. 오

2.  `yarn workspace @marulloc/ui-library tailwindcss init -p`
    다음 명령어로 config 파일들을 만들어주는 명령어를 실행한다.
    이 명령어를 통해 tailwind와 postcss의 config 파일이 생성된다.

    -   tailwind.config.js
    -   postcss.config.js

    시키는대로 tailwind.config.js의 content에 가이드와 동일하게 값을 넣어준다.
    tailwind가 적용되는 경로를 명시한 것이다.

3.  global css에 tailwind directive 추가
    @tailwind는 Tailwind CSS에서 제공하는 미리 정의된 CSS 클래스를 사용할 수 있도록 해주는 at-rule(특별한 문법)인데, 이것들이 Tailwind의 본체다.

    -   Directive(지시어)? at-rule(특별한 규칙)?
        CSS에는 특정 스타일 지시어를 사용하여 스타일 규칙에 영향을 주는 것을 지시할 수 있다.
        이것들을 CSS Directive 혹은 at-rule이라고 부르는데

    우리가 잘 아는 @media, @import, @font-fase @page 등이 있다.
    이런 지시어들은 특정 스타일 규칙이나 속성에 대한 "조건부" 로직, 외부 스타일 파일 가져오기, 폰트 정의,
    인쇄용 문서 스타일링 등 다양한 용도로 사용된다.

    tailwind에서 @tailwind 역시 지시어이고
    @tailwind 키워드로 base, components, utilities와 같은 세부규칙을 정의한 것이다.
    (?????) 이런 지시어를 통해 tailwind에서 미리 만들어 둔 클래스를 사용할 수 있는 것인가 ?
    (?????) 아니면 이런 키워드들을 또 쓸 수 있다는 뜻인가 ??

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    -   @tailwind base
        전역 CSS 스타일을 정의하는 데 사용됩니다. HTML 요소의 기본 스타일, 타이포그래피, 색상 등의 스타일을 지정하고
    -   @tailwind components
        재사용 가능한 UI 컴포넌트를 정의하는 데 사용된다.
        예를 들어, 버튼, 카드, 알림 메시지 등의 컴포넌트를 정의할 수 있게된다.
    -   @tailwind utilities
        작은 스타일 유틸리티 클래스를 정의하는 데 사용됩니다.
        마진, 패딩, 텍스트 정렬, 색상 등의 스타일을 지정하는 클래스를 정의할 수 있게된다.

### Theming

Tailwind css 변수명 고민 안해도 되고
utility first css 덕분에 고정적인 스타일 틀 안에서 사용할 수 있게되어
협업에서 매우 유용하다고 판단했다.

그러나 진짜 협업을 하려면 Theming이 필수라고 생각했고
Tailwind로 Theming을 연습해봤다 .

물론 theming대신 스타일을 감싸고 있는 컴포넌트들을 만들면 되긴하지..
그러나 뭐 primary color 색의 변경이라던가
기본적인 폰트크기 변경이라는
대작업이 주어졌을때 좀더 간편하게 일 하기 위함이다.
(솔직히 사내에서 여러 커머스 스토어들을 관리하는데.. 이 협업 특성상 이걸 꼭 고려해놔야만 실제로 잘 쓸 수 잇을 것 같다)

## Interactive

### SVG

이미지 부분에서 유저에게 가장 불쾌감을 주는 것 중 하나가 깨진 이미지다.
기본적인 이미지들을 사용하면 확대하는 경우 이미지가 흐려지고 깨지는 경우가 있는데
.svg 확장자는 아무리 확대해도 깨지지 않는다.

SVG는 Scalable Vector Graphics의 약자로

-   말 그대로 크기를 조정해도 품질이 저하되지 않는다.
-   벡터 그래픽 파일 형태
-   XML 기반의 파일이기 때문에 이미지임에도 불구하고 편집이 가능하다.

#### Vector vs Raster

-   Raster
    기존의 픽셀(RGB를 담은 점) 형태로 표현되는 이미지 형식을 말한다.
    예를 들면 GIF, JPG, PNG 같은 것들이 있다.
    유한한 점의 개수로 이미지가 구성되기 때문에 "사이즈"가 결정되는 이미지다.
-   Vector
    벡터그래픽은 픽셀과 무관하다
    수학 계산식으로 정의되는 이미지로, 컴퓨터에게 그리는 방법을 알려주고
    컴퓨터는 그 계산식에 따라 이미지를 그려주게 된다.
    SVG, AI, EPS 확장자들이 이런 것이다

그렇다면 우리는 Raster를 왜 사용하는가?
복잡하고 해상도가 높은 고품질의 이미지를 구성할때는 픽셀로 구성된 Raster 형태가 맞다.
Vector 그래픽은 단순하지만 깨지면 좋지 않은 이미지(로고, 아이콘)등을 구현할 때 주로 사용된다.

### CSS Animation

애니메이션은 스타일 전환을 부드럽게 만들어주는 속성이다.
중간중간 변화하는 상태를 정의해서 다채로운 애니메이션을 만들 수 있게해주는 속성이다.
브라우저 화면에 노출되지 않는 요소에 대한 애니메이션 타이밍을 조절 하는 최적화에도 좋다

-   animation-delay : 로드 이후 언제 시작할 것인지
-   animation-direction : (종료 후) 정방향/역방향 진행
-   animation-duration : 어느 시간동안에 걸쳐 진행될지
-   animation-iteration-count : 몇 번 반복될지 (inifite: 무한)
-   animation-name : 중간 상태를 지정
-   animation-play-state : 멈춤/재생 상태 지정
-   animation-timing-function : 어떤 시간간격으로 진행할지
    -   cubic-bezier(p1X,p1Y, p2X, p2Y)
-   animation-fill-mode : 시작 전/애니메이션 종료 후 스타일

### CSS transform

요소를 변환시키는 용도로 사용하는 속성이다.
보통 이렇게 크게 4가지로 분류한다

-   translate : 이동 (translateX, translateY)
-   scale : 확대, 축소 (scaleX scaleY)
-   rotate : 회전
-   skew : 기울임

#### matrix 는 모든 메소드를 한번에 적용한다

-   matrix (scaleX, skewY, skewX, scaleY, translateX, translateY)

#### transfrom 기준 관련한 속성

-   transform-box
-   transform-origin

### Parallax Scrolling

-   레이어별 스크롤 속도를 다르게하여 입체감을 주는 디자인 기법
-

## Next Auth

### email provider

NextAuth의 email 로그인을 구현하려면 nodemailer라는 라이브러리도 필요하다

-   nodemailer
    nodemailer는 Node.js에서 SMTP 프로토콜을 사용하여 이메일을 보낼 수 있도록 도와주는 라이브러리인데
    템플릿 엔진과도 함께 사용할 수 있다.
    https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/

NextAuth v3에서는 nodemailer가 의존성으로 존재했지만
v4에서는 nodemailer가 의존성에서 빠져서 수동으로 설치해줘야한다.

.env 파일에서 Email_Server 환경 변수에는 SMTP 서버의 호스트 이름 또는 IP 주소를 입력해야 합니다.
이 변수는 server 속성에 할당되어 sendVerificationRequest 함수에서 사용됩니다.

예를 들어, Gmail SMTP 서버를 사용하는 경우, .env 파일에서 다음과 같이 설정할 수 있습니다:

```js
EMAIL_SERVER = smtp.gmail.com;
```

이 경우, server 속성은 smtp.gmail.com로 설정됩니다.

SMTP 서버의 포트 번호와 인증 정보는 server 속성의 객체에 함께 정의될 수 있습니다.
예를 들어, Gmail SMTP 서버를 사용할 경우, .env 파일에서 다음과 같이 설정할 수 있습니다:

```js
EMAIL_SERVER = smtp.gmail.com;
EMAIL_PORT = 465;
EMAIL_USERNAME = your_gmail_username;
EMAIL_PASSWORD = your_gmail_password;
EMAIL_FROM = your_email_address;
```

위와 같이 .env 파일에서 설정한 환경 변수를 사용하여 EmailProvider를 정의하면 됩니다.

```js
EmailProvider({
  server: {
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  from: process.env.EMAIL_FROM,
  sendVerificationRequest({
    identifier: email,
    url,
    provider: { server, from },
  }) {
    /* your function */
  },
}),
```

구글 SMTP 서버를 사용할 경우 구글 계정의 보안 설정에서 "보안 수준이 낮은 앱의 액세스"를 허용해주어야 합니다.
이 옵션을 활성화하지 않으면 구글 계정의 보안 기능으로 인해 SMTP 서버 연결이 차단될 수 있습니다.

아래는 구글 계정에서 "보안 수준이 낮은 앱의 액세스" 옵션을 활성화하는 방법입니다.

1. 먼저, 구글 계정에 로그인한 후 아래 링크로 이동합니다.
   https://myaccount.google.com/security
2. "보안 수준이 낮은 앱의 액세스" 옵션을 찾아서 클릭합니다.
3. "보안 수준이 낮은 앱의 액세스"를 "사용"으로 설정합니다.
4. 변경 사항을 저장합니다.
   이제 구글 SMTP 서버를 사용할 때 "보안 수준이 낮은 앱의 액세스"가 활성화되어 있다면 SMTP 서버 연결이 가능해집니다.

또한, 구글 SMTP 서버의 기본 포트는 465(SSL) 또는 587(TLS)입니다. 따라서 .env 파일에서 EMAIL_PORT 환경 변수를 설정할 때, SSL 연결을 사용하는 경우에는 465, TLS 연결을 사용하는 경우에는 587을 입력해야 합니다.
