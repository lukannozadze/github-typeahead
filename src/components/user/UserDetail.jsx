import Info from './Info';
import Layout from './Layout';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function UserDetail() {


  return (
    <>
    <Link to='/'>
    <Button className='mx-8 my-8'>Back</Button>
    </Link>
    <Layout>
      <Info/>
    </Layout>
    </>
  )
}
