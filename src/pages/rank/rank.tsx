import SectionTitle from "@/src/features/rank/sectionTitle"
import BookCardSection from "@/src/features/rank/bookCardSection"

import { RankContainer } from './rank.styled'

export default function Rank() {
    return (
        <RankContainer>
            <SectionTitle />
            <BookCardSection></BookCardSection>
        </RankContainer>
    )
}