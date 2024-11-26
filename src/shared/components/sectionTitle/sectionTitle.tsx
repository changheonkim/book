import { SectionTitleWrapper } from './sectionTitle.styled'

import { SectionTitleProps } from './sectionTitle.type'

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <SectionTitleWrapper>{props.children}</SectionTitleWrapper>
    )
}