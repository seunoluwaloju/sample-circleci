import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
    })

    it('renders a button element', () => {
        expect(container.querySelector('button')).not.toBeNull()
        expect(getByText(container, 'Click me!')).toBeInTheDocument()
    })
    it('renders a new paragraph via JavaScript when the button is clicked', async () => {
        const button = getByText(container, 'Click me!')

        fireEvent.click(button)
        let generatedParagraphs = container.querySelectorAll('#response-container')
        expect(generatedParagraphs.length).toBe(1)
    })
})