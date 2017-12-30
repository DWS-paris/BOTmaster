export interface ChatMessage {
    id: string,
    feeling?: string,
    content: string,
    intent?: string,
    intentSubject?: string
}