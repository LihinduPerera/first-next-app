"use client";

import { Link } from "lucide-react";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }

  return (
    <button type="reset" onClick={reset}>
        <Link href="/" className="search-btn"></Link>
    </button>
  )
}

export default SearchFormReset