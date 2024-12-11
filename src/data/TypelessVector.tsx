import React from 'react';
import { Link } from 'react-router-dom';
import TypelessVector_1 from "./TypelessVector_1.png";
import TypelessVector_2 from "./TypelessVector_2.png";

const TypelessVector: React.FC = () => {
    return (
        <div>
            <h1>Typeless Vector</h1>
            <hr />
            <p>
                Until recently I had been working on a data structure, which I like to call, <strong>"Typeless Vector"</strong>.
                It is basically a vector, <br />but a type-erased one. I was trying to study the infamous ECS library, <Link to="https://github.com/skypjack/entt"><strong>EnTT</strong></ Link>, made
                especially for the Game Dev industry.
            </p>
            <p>
                <em><strong>Why did I create this data structure, if I am going to need compile-time type information to access any members or data itself, anyway?</strong></em><br />
                Well, the plan was to essentially combine this with a greater data structure (a registry). <br />
                I was planning to use this data structure to be the <strong>"value"</strong> in a <strong>"key-value pair"</strong> where the key would be type information.
                And I needed a common interface that could contain different types of <strong>components</strong>. <br />
                So that way, I would be able to safely access the necessary <strong>Typeless Vector</strong> without violating any memory-access issues.
                <hr />
                In order to free our memory safely and call the appropriate destructor of the contained type, we must save the <strong>"deleter"</strong> function.
                I had learned this technique inspecting possible <strong>std::any</strong> implementations. <br />
                Also, since we can not have template constructors, I decided to hide the constructor to the API user. Instead, to create an instance, we would need to call the static <strong>"create"</strong> method.
            </p>
            <img src={TypelessVector_1} height='40%' width='40%' alt='Nothing to see here, unfortunately...'/>
            <br /><br />
            <p>
                After this, we have business as usual. However, one thing to note was that, while growing our heap-allocated data, <br />
                it is important we do not mess with the alignment of our memory block. It should be aligned appropriately, respectively to the contained type.
            </p>
            <img src={TypelessVector_2} height='40%' width='40%' alt='Nothing to see here, unfortunately...'/>
            <br /><br />
            <p>
                I also added a <strong>"getView"</strong> method, so that we can iterate over our data, should we provide the compile-time type information to the API. <hr />
                It is important to note that, for now, this implementation was not done with <strong>Rule of 6</strong> in mind. For further use, move and copy constructors, <br />
                move and copy assignment operators have to be implemented as well. And also, I am not checking whether the <strong>aligned_alloc</strong> returns null or not. < br />
                We could also perhaps store the input template type's <strong>RTTI</strong> with the constructor to tell whether we have the correct type as the input template parameter, but that would bring runtime type checking. <br />
                I am rather depending on undefined behaviour here, to optimize the code for performance.
            </p>
            <p>
                You could check out this code snippet over this <Link to="https://godbolt.org/z/EKT5qvhej"><strong>godbolt link</strong></Link><br />
                Feel free to ask me any questions you might have, although I'm not expecting any readers any time soon...
            </p>
        </div>
    );
};

export default TypelessVector;
