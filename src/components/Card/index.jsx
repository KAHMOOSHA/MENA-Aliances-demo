import { Card } from 'antd';
const { Meta } = Card;

const Card1 = () => (
  <Card
  className='workers'
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default Card1;