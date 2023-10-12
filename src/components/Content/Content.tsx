import React from 'react';
import "./Content.css"

function Content() {
    const Section = ({ title, children }: { title: string, children: string }) => {
        return (
            <div className="section">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        );
    }

    return (

        <div className='container'>
            <Section title="Section 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, quam in cursus fermentum, dui elit varius nisl, quis tincidunt elit libero vel leo. Fusce vulputate, dui sit amet lacinia hendrerit, odio sapien dignissim massa, quis tincidunt sapien odio id nulla. Mauris auctor orci id euismod. Nulla facilisi. Nullam auctor varius elit, quis eleifend velit interdum nec. Morbi fermentum augue et rhoncus.
            </Section>
            <Section title="Section 2">
                Vestibulum dapibus odio at dapibus ultricies. Pellentesque at orci a odio facilisis vestibulum. Proin venenatis ultrices justo, nec rhoncus est. Vivamus suscipit, eros ut auctor mattis, quam justo tincidunt quam, nec hendrerit purus justo in ex. Donec consequat orci ut justo eleifend auctor. Quisque hendrerit congue nunc, nec eleifend tortor convallis sit amet. Aliquam id semper velit.
            </Section>
            <Section title="Section 3">
                Sed varius, neque a imperdiet rhoncus, libero purus faucibus odio, at vestibulum est ipsum in lorem. Nulla facilisi. Sed in quam nec ex posuere tristique. Sed nec nisl id odio eleifend bibendum. Suspendisse non luctus libero. Proin ac libero massa. Suspendisse potenti.
            </Section>
        </div>
    )
}

export default Content;