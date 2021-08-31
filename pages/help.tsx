import TextLayout from '@/components/layouts/TextLayout';
import Container from '@/container/Container';
import type { NextPage } from 'next';

const commandList = [
    "HELP:   is going to help",
    "HOME:   is going to homepage",
    "BLOG:   is going to blog"
]

const Help: NextPage = () => {
    const text = "Burası help Page"
    return (
      <Container>
        <div>
          <div className="text-green-300 font-mono">
            <TextLayout text={commandList[0]} underscore={false} />
            <TextLayout text={commandList[1]} underscore={false} />
            <TextLayout text={commandList[2]} underscore={true} />
          </div>
        </div>
    </Container>
      )
}

export default Help
