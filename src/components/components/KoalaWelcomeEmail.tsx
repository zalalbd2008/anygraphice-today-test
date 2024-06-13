import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface KoalaWelcomeEmailProps {
  userFirstname: string;
  phoneNumber: string;
  userMessage: string;
}

const baseUrl = process.env.SITE_URL;

const KoalaWelcomeEmail: React.FC<
  KoalaWelcomeEmailProps
> = ({ userFirstname, phoneNumber, userMessage }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover
      qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`/static/any_graphics_today.svg`}
          width="170"
          height="50"
          alt="any_graphics_today"
          style={logo}
        />
        <Text style={paragraph}>
          Hi, anygraphicstoday team,
        </Text>
        <Text style={paragraph}>
          you have received a new message from
          anygraphictoday. The sender's name is{' '}
          {userFirstname} and their phone number is{' '}
          {phoneNumber}.
        </Text>

        <Heading as="h4">
          Certainly! "Here is your customer message."{' '}
        </Heading>
        <Text>{userMessage}</Text>
        <Text style={paragraph}>
          Best,
          <br />
          {userFirstname}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Texas, Florida, California, Chicago, New York,
          Atlanta
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.defaultProps = {
  userFirstname: 'Alan',
};

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 10px 48px 10px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#FF7425',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
