import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a
          href="https://github.com/nty-dev/Course-Royale"
          target="_blank"
          rel="noopener noreferrer"
        >
          CourseRoyale@Edurec
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Coursereg, but with gambling elements.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
