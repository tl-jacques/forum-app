import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Notification, NotificationProps } from "@/domain/notification/enterprise/entities/notification";

import { faker } from '@faker-js/faker'

//Partial faz qualquer propriedade se tornar opcional
export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID
) {
  const notification = Notification.create({
    title: faker.lorem.sentence(4),
    recipientId: new UniqueEntityID(),
    content: faker.lorem.sentence(10),
    ...override
  }, id)

  return notification
}