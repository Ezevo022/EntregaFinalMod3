import { Typography, Button, Row, Col, Card } from 'antd'

const { Title, Paragraph } = Typography

export const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          padding: '6rem 2rem',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Title style={{ color: 'white', fontSize: '3rem' }}>
          Bienvenido a Nuestra Tienda
        </Title>
        <Paragraph style={{ color: 'white', fontSize: '1.2rem' }}>
          Productos únicos al mejor precio. ¡Mirá nuestras ofertas!
        </Paragraph>
      </div>

      <div style={{ padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card title="Envíos rápidos">
              A todo el país en 48 hs.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Pagá como quieras">
              Tarjeta, transferencia o efectivo.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Atención personalizada">
              Estamos para ayudarte.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}