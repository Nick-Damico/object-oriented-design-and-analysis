export class ListNode<T> {
  public value?: T
  public next: ListNode<T> | null = null
  public prev: ListNode<T> | null = null
  constructor(value?: T | undefined) {
    this.value = value
  }
}

export default class LinkedList<T> {
  private _head: ListNode<T>
  private _tail: ListNode<T>
  private _size: number

  constructor() {
    let newNode = new ListNode<T>()
    this._head = newNode
    this._tail = this._head
    this._size = 0 // we do not count the dummy node
  }

  // Add to Tail
  add(value: T): void {
    if (this.contains(value)) return

    this.addAtTail(value)
  }

  addAtTail(value: T): void {
    let curTail = this._getTail()
    let newNode = new ListNode(value)

    curTail.next = newNode
    newNode.prev = curTail
    this._tail = newNode
    ++this._size
  }

  contains(value: T): boolean {
    return this.indexOf(value) >= 0
  }

  indexOf(value: T): number {
    let index = 1
    let currentNode = this._head.next

    while (currentNode) {
      if (currentNode.value === value) {
        return index
      }

      currentNode = currentNode.next
      ++index
    }

    return -1
  }

  toArray(): T[] {
    let collection: T[] = []
    let currentNode = this._head.next

    while (currentNode) {
      if (currentNode.value) {
        collection.push(currentNode.value)
      }

      currentNode = currentNode.next
    }

    return collection
  }

  size(): number {
    return this._size
  }

  private _getTail(): ListNode<T> {
    return this._tail
  }
}
