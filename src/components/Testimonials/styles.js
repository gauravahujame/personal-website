import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Testimonials = styled.section`
  ${tw`bg-gray-100 border-t border-indigo-100 mt-auto`};
`;

export const Testimonial = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mx-auto border border-pink-500 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;
