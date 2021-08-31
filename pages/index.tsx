import Container from '@/container/Container';
import type { NextPage } from 'next';


const Home: NextPage = () => {
    return (
      <Container>
        <div>
          <div className="text-green-300 font-mono">
            Help me!
          </div>
        </div>
    </Container>
      )
}

export default Home
