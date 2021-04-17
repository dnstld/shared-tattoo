import * as S from './styles'

const Main = ({
  title = 'ReactJS',
  description = 'TypeScript, ReactJS, NextJS e Styled Compomponents'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Some alt" />

    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration src="/img/hero-illustration.svg" alt="Some alt" />
  </S.Wrapper>
)

export default Main
