import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { AnswerComment, AnswerCommentProps } from "@/domain/forum/enterprise/entities/answer-comment";
import { faker } from '@faker-js/faker'

export function makeAnswerComment(
    override: Partial<AnswerCommentProps> = {},
    id?: UniqueEntityID
) {
    const answerComment = AnswerComment.create({
        answerId: new UniqueEntityID(),
        authorId: new UniqueEntityID(),
        content: faker.lorem.text(),
        ...override
    }, id)

    return answerComment
}