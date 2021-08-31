import TextLayout from '@/components/layouts/TextLayout';
import Container from '@/container/Container';
import type { NextPage } from 'next';


const Blog: NextPage = () => {
  const text = "Blog In molestie blandit est a lobortis. Etiam risus ligula, aliquet at turpis ac, vulputate semper nisl. In nec mi id justo congue sollicitudin sed eu metus. Pellentesque maximus ut quam at consequat. Aliquam malesuada mauris in finibus auctor. Donec venenatis lectus sit amet condimentum mattis"
    return (
      <Container>
        <div>
          <div className="text-green-300 font-mono">
            <TextLayout text={text} underscore={true} />
          </div>
        </div>
    </Container>
      )
}

export default Blog
