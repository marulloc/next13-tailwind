# Server Component

먼저 Server Component에 대해 알기 전에, Next.js의 프로세스에 대해 알아보자

## Next Server Side Rendering

Next.js의 큰 특징 중 하나는 Client side에서만 진행되었던 프론트엔드 작업을
서버가 분담하게 된 것이었다.
Renering은 Server에서 진행하지만 Hydration은 Client에게 하도록 만드는 방식이었다.
최초 페이지 라우팅 단계에선 Next 서버가 페이지를 렌더하고 라우팅해주지만
클라이언트에 페이지가 도착한 이후에 다시 그 페이지에 접속하면 CSR 방식으로 라우팅이 진행된다.
https://www.howdy-mj.me/next/hydrate

그런데 만약, 로그인이 되었을 때와 로그인이 되지 않았을 때를 기준으로 새롭게 그려져야하고
그 페이지가 서버사이드렌더링된 페이지라면 어떻게 해야될까?
어떻게 이미 서버에서 건네준 페이지를 다시 서버에서 렌더링해서 가져올 수 있을까 ?
즉 이 질문은 어떻게 rehydrate 할 수 있을까에 대한 질문이다.

https://www.joshwcomeau.com/nextjs/refreshing-server-side-props/

Next Router의 replace와 같은 메소드를 쓰면 된다.
왜 이게 동작하는지는 위 링크에 나와있다.

근데 다른페이지에서 동작한것이라면 ?
역시 replace를 전역공간에 마련해두면 되지않을까?? (뇌피셜)
