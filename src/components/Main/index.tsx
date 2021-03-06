import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de Um Átomo e React Avançado Escrito ao Lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela com Código"
    />
  </S.Wrapper>
)
export default Main
