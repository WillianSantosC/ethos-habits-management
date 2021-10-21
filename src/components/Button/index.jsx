import { Container } from "./style";

const Button = ({ children, pinkSchema = false, ...rest }) => {
  return (
    <Container pinkSchema={pinkSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
