import { Container } from "./style";

const Button = ({ children, pinkSchema = false, ...rest }) => {
  return (
    <Container whiteSchema={pinkSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
