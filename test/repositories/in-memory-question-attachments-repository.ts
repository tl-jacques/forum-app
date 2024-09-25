import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionAttachmentsRepository } from "@/domain/forum/application/repositories/question-attachments-repository";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";


export class InMemoryQuestionAttachmentsRepository implements QuestionAttachmentsRepository {
    public items: QuestionAttachment[] = []

    async findManyByQuestionId(questionId: string) {
        const questionAttachment = this.items.filter(
            item => item.questionId.toString() === questionId
        )

        return questionAttachment
    }

}